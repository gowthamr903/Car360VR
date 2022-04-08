
var currentView = "";

AFRAME.registerComponent('click-marker', {
    init: function () {

        let skybox = $("#sky");
        let left_Marker = $("#left_marker");
        let right_Marker = $("#right_marker");
        let info_marker = $("#info_marker");

        let interior_marker_1 = $("#interior_marker_1");
        let interior_marker_2 = $("#interior_marker_2");


        var interiorrbtn = document.querySelector(".interiorrbtn");



        interiorrbtn.addEventListener('click', function (evt) {

            skybox.attr("src", "#front_interior_img");
            info_marker.attr("visible", "false");
            markerHide();
            InteriormarkerShow();
        });

        var exteriorbtn = document.querySelector(".exteriorbtn");

        exteriorbtn.addEventListener('click', function (evt) {

            skybox.attr("src", "#front_img");

            markerShow();
            InteriormarkerHide();

        });

        this.el.addEventListener('click', function (evt) {

            currentView = evt.target.getAttribute("data-view")

            // skybox = $("#sky");



            info_marker.attr("visible", "false");
            markerHide();

            //   $('#sky').attr("src", "images/front_left_side.JPG");
            console.log(evt);

            switch (currentView) {
                case "front":

                    skybox.attr("src", "#front_img");
                    left_Marker.attr("data-view", "front_left_side");
                    right_Marker.attr("data-view", "front_right_side").attr("position", "2.8 0.25 -1.2");
                    info_marker.attr("visible", "true").attr("data-view", "front_open");
                    markerShow();
                    break;

                case "front_left_side":

                    skybox.attr("src", "#front_left_img");

                    left_Marker.attr("data-view", "left");
                    right_Marker.attr("data-view", "front").attr("position", "2.4 0.25 -0.6");
                    markerShow();
                    break;

                case "front_right_side":

                    skybox.attr("src", "#front_right_side_img");

                    left_Marker.attr("data-view", "front");
                    right_Marker.attr("data-view", "right");
                    markerShow();
                    break;

                case "left":

                    skybox.attr("src", "#left_img");
                    left_Marker.attr("data-view", "back_left_side");
                    right_Marker.attr("data-view", "front_left_side").attr("position", "2.8 0.25 -1.2")
                    info_marker.attr("visible", "true").attr("data-view", "left_open");

                    markerShow();


                    break;

                case "right":

                    skybox.attr("src", "#right_img");
                    left_Marker.attr("data-view", "front_right_side");
                    right_Marker.attr("data-view", "back_right_side").attr("position", "2.8 0.25 -1");

                    info_marker.attr("visible", "true").attr("data-view", "right_open");
                    markerShow();

                    break;

                case "back_left_side":

                    skybox.attr("src", "#back_left_side_img");
                    left_Marker.attr("data-view", "back");
                    right_Marker.attr("data-view", "left");
                    markerShow();

                    break;

                case "back_right_side":

                    skybox.attr("src", "#back_right_side_img");
                    left_Marker.attr("data-view", "right");
                    right_Marker.attr("data-view", "back");
                    markerShow();
                    break;

                case "back":

                    skybox.attr("src", "#back_img");
                    left_Marker.attr("data-view", "back_right_side");
                    right_Marker.attr("data-view", "back_left_side");
                    info_marker.attr("visible", "true").attr("data-view", "back_open");
                    markerShow();
                    break;


                case "front_open":

                    skybox.attr("src", "#front_open_img");

                    info_marker.attr("visible", "false");
                    markerShow();
                    break;

                case "left_open":

                    skybox.attr("src", "#left_open_img");

                    info_marker.attr("visible", "false");


                    markerShow();
                    break;

                case "right_open":

                    skybox.attr("src", "#right_open_img");

                    info_marker.attr("visible", "false");

                    markerShow();
                    break;

                case "back_open":

                    skybox.attr("src", "#back_open_img");

                    info_marker.attr("visible", "false");

                    markerShow();
                    break;


                case "front_interior":

                    skybox.attr("src", "#front_interior_img");

                    interior_marker_1.attr("position", "-2.5 1 -4").attr("data-view", "side_interior");
                    interior_marker_2.attr("position", "-3.5 1.5 2").attr("data-view", "back_interior");

                    InteriormarkerShow();

                    break;
                case "side_interior":

                    skybox.attr("src", "#side_interior_img");

                    interior_marker_1.attr("position", "2 1 1").attr("data-view", "front_interior");
                    interior_marker_2.attr("position", "-0.5 1 6").attr("data-view", "back_interior");

                    InteriormarkerShow();
                    break;
                case "back_interior":

                    skybox.attr("src", "#back_interior_img");

                    interior_marker_1.attr("position", "4 1 -8").attr("data-view", "front_interior");

                    interior_marker_2.attr("visible", "false");
                    break;

                default:
                    break;
            }









        })


        function markerHide() {
            left_Marker.attr("visible", "false");
            right_Marker.attr("visible", "false");
        }


        function markerShow() {

            setTimeout(() => {
                left_Marker.attr("visible", "true");
                right_Marker.attr("visible", "true");
            }, 50);

        }


        function InteriormarkerHide() {

            interior_marker_1.attr("visible", "false");
            interior_marker_2.attr("visible", "false");
        }

        function InteriormarkerShow() {

            interior_marker_1.attr("visible", "true");
            interior_marker_2.attr("visible", "true");
        }

    }


});
