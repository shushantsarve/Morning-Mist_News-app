import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsdata.io/api/1/news?apikey=pub_159762382799484f8db98c7c04a8422ce3596&country=${props.country}&category=${props.category}&language=en`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(45);
        let parsedData = await data.json();
        props.setProgress(70);

        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)

        props.setProgress(100);
    }

    useEffect(() => {
        document.title = ` Morning Mist - ${capitalizeFirstLetter(props.category)}`;
        updateNews();
    }, [])


    const fetchMoreData = async () => {
        setPage(page + 1);
        const url = `https://newsdata.io/api/1/news?apikey=pub_159762382799484f8db98c7c04a8422ce3596&country=${props.country}&category=${props.category}&language=en`;
        let data = await fetch(url);
        let parsedData = await data.json();

        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    }


    return (
        <>
            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }} >Morning Mist - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Spinner />}


            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.link} >
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.image_url} newsUrl={element.link} author={element.source_id} date={element.pubDate} />
                            </div>
                        })}
                    </div>
                </div>

            </InfiniteScroll>
        </>
    )
}


News.deafultProps = {
    country: 'in',
    pageSize: 8,
    category: 'top'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News;