1) MULTI-VIDEO-MAPPING

>> multi_video_mapper.html and multi_video_mapper.js go together, inside the p5.mapper directory structure within the p5.mapper->examples- > video-> folder.
Make sure that the assets folder within examples -> video- > assets --> contains a .webm or a .mp4 or .mov version of the video you want to map

>> Currently this code supports mapping 2 videos, stored in variables 'video' and 'video2' Extend as needed. We make sure that the videos are fully loaded before creating a quadmap.

video.elt.onloadeddata = () => {
        video2.elt.onloadeddata = () => {
            pMapper = createProjectionMapper(this);
            quadMap = pMapper.createQuadMap(video.width, video.height);
            quadMap2 = pMapper.createQuadMap(video2.width, video2.height);
            pMapper.load("maps/map.json");
        };
        //console.log (video.width, video.height)
    };


2) DIPLAYING a 3D MODEL and EXTRACTING A VIDEO 

display_shell.html used Babylon.js Game engine to display a 3D model. 

>> Modify line 176 to use your own .GLB model file >>  BABYLON.SceneLoader.Append("assets/", "shell_best.glb", scene, function (scene) {
>> Modify line 200 to change the speed of rotation from 0.02 to a higher number or lower number to increase or decrease speed of rotation  >>> scene.meshes[0].rotate(BABYLON.Vector3.Up(), 0.02);

   
