# detector.js

Collect information about a viewer's system and send it to your reporting system.

- Browser version
- Flash version
- Custom information (from your app)

## Usage

    var detector = new Detector();
    
    // Single property
    detector.collect('browser');
    
    // Array of properties
    detector.collect(['browser', 'flash']);
    
    // Custom property
    detector.collect('stream', function() {
      // RTMP, RTMPT, HTTP or RTSP
      return player.streamType;
    });

## Support

Detector.js has been tested in the following browsers. It might well work in others but we haven't checked them yet.

### Version 0.1.0

- Chrome 28.0.1500.95
- Mobile Safari 6.0
- Internet Explorer 7
