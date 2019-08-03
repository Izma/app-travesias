import { Component, Vue } from 'vue-property-decorator';
import WithRender from './layout.html';
import Slider from '@jeremyhamm/vue-slider';

@WithRender
@Component({
  name: 'tvp-layout',
  components: {
    slider: Slider,
  },
})
export class Layout extends Vue {
  public active: boolean = false;
  public activeItem: number = 0;
  /**
   * HelloWorld's constructor
   */
  constructor() {
    super();
  }
}
export default Layout;
