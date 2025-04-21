multi_video_mapper.html and multi_video_mapper.js go together, inside the p5.mapper directory structure within the p5.mapper->examples- > video-> folder.
Make sure that the assets folder within examples -> video- > assets --> contains a .webm or a .mp4 or .mov version of the video you want to map

Currently this code supports mapping 2 videos, stored in variables 'video' and 'video2' Extend as needed. We make sure that the videos are fully loaded before creating a quadmap.

video.elt.onloadeddata = () => {
        video2.elt.onloadeddata = () => {
            pMapper = createProjectionMapper(this);
            quadMap = pMapper.createQuadMap(video.width, video.height);
            quadMap2 = pMapper.createQuadMap(video2.width, video2.height);
            pMapper.load("maps/map.json");
        };
        //console.log (video.width, video.height)
    };
