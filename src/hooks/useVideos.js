import { useEffect, useState } from 'react'
import youTube from '../apis/youTube'

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async term => {
        const response = await youTube.get('search', {
            params: {
                q: term
            }
        });
        setVideos(response.data.items);

    }

    return [videos, search];
};

export default useVideos
