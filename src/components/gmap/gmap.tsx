import { Component, h } from '@stencil/core/internal';

@Component({
  tag: 'rf-gmap',
  styleUrl: './gmap.css',
  shadow: true,
})
export class Gmap {
  render() {
    return (
      <div class="container">
        <h1>Google map</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13190.998207961922!2d35.932669956261456!3d34.25493376929733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152202240f8146f5%3A0xdf44a5e8dd2d93e!2sWadi%20Qannoubine!5e0!3m2!1sen!2slb!4v1724326817599!5m2!1sen!2slb"
          width="600"
          height="450"
          ref={el => el?.setAttribute('allowfullscreen', '')}
          loading="lazy"
        ></iframe>
      </div>
    );
  }
}
