import { News } from "../../components/news/News";
import { useEffect, useState } from "react";
import { getNewsListAction } from "../../store/api-actions";
import { Loader } from '@consta/uikit/Loader';
import { useDispatch, useSelector } from "react-redux";
import { setNewsState } from "../../store/newsSlice";

const Home = function(){
    const dispatch = useDispatch()
    const [news, setNews] = useState(useSelector(state => state.news.value));
    
    useEffect(() => {
        getNewsListAction().then(response=>{
            setNews(response)
            dispatch(setNewsState(response))
        })
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