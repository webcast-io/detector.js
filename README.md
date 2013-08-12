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
