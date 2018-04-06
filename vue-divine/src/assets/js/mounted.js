fullpage.initialize('#fullpage', {
            anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
            menu: '#menu',
            navigation: true,
            navigationPosition: 'right',
            navigationColor: '#f2f',
            navigationTooltips: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
            slidesNavigation: false,
            slidesNavPosition: 'bottom',
            scrollBar: false,
            //scrolling
            css3: true,
            scrollingSpeed: 500,
            autoScrolling: true,
            easingcss3: 'ease-out',
            loopHorizontal: true,
            touchSensitivity: 5,
            //Accessibility
            keyboardScrolling: true,
            recordHistory: true,
            //design
            controlArrows: true
        });
