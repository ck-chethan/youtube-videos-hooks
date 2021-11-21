import React, { useEffect, useState } from 'react'
import youTube from '../apis/youTube'
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';


const App = () => {

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        onTermSubmit('Tesla');
    }, []);

    const onTermSubmit = async term => {
        const response = await youTube.get('search', {
            params: {
                q: term
            }
        });
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    }
    // const onVideoSelect = (video) => {
    //     setSelectedVideo(video);
    // }

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList
                            onVideoSelect={setSelectedVideo}
                            //(video) => setSelectedVideo(video) <===> setSelectedVideo
                            videos={videos}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default App
