import { News } from "../../components/news/News";
import { useEffect, useState } from "react";
import { getNewsListAction } from "../../store/api-actions";
import { Loader } from '@consta/uikit/Loader';

const Home = function(){
    const [news, setNews] = useState();
    useEffect(() => {
        async function fetchNews(){
            setNews(await getNewsListAction());
        }
        fetchNews()
    }, []);

    if (!news || news.length === 0) return <Loader size="m" />

    return (
        <>
            {news.map(news => <News
                key={news.name}
                name={news.name}
                description={news.description} 
                createdAt={(new Date(news.createdAt)).toDateString()}/>)}
        </>
    )
}

export default Home