/* global describe, it, beforeEach, afterEach, expect, Detector */

'use strict';

(function () {

  describe('Detector', function () {

    beforeEach(function () {
      this.detector = new Detector();
    });

    afterEach(function () {
      delete this.detector;
    });

    it('should have a data property with a timestamp', function () {

      expect(this.detector.data).to.exist;
      expect(this.detector.data).to.contain.keys('time');
      expect(this.detector.data.time).to.be.an.instanceof(Date);

    });

    describe('#collect()', function () {

      it('should return the instance of Detector', function () {

        expect(this.detector.collect('browser')).to.instanceOf(Detector);

      });

      it('should warn if a property is not a string or array', function () {

        expect(function () {
          return this.detector.collect(1);
        }).to.throw(Error);

        expect(function () {
          return this.detector.collect({'key': 'value'});
        }).to.throw(Error);

      });

      it('should accept a single property as a string');

      it('should accept an array of properties as string');

      it('should accept an object literal of properties and values');

      it('should accept a single property/value as two arguments');

      it('should add the property to the data property', function () {

        this.detector.collect('browser');

        expect(this.detector.data.browser).to.exist;
        expect(this.detector.data.browser).to.be.a.string;

      });

      it('should allow for a custom method to create a property value', function () {

        var stream = 'rtmp://streaming.axisto.co.uk/live/streamer1/8902390042390';

        this.detector.collect('stream', function () {
          return stream.match(/^[a-z]{4}/g)[0];
        });

        expect(this.detector.data.stream).to.exist;
        expect(this.detector.data.stream).to.equal('rtmp');

      });

    });

    describe.skip('#getBrowser()', function () {

      it('should return the browser\'s user agent string', function () {

        

      });

    });

    describe.skip('#getMethodByProperty()', function () {

      it('should call a predefined object method', function () {

        

      });

    });

    describe.skip('#getFlash()', function () {

      it('should warn if swfobject object is not available', function () {

        

      });

      it('should return a swfobject object version object', function () {

        

      });

    });

  });

})();
