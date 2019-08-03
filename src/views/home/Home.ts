import { Component, Vue } from 'vue-property-decorator';
import WithRender from './home.html';

@Component
@WithRender
export class Home extends Vue {
  /**
   *
   */
  constructor() {
    super();
  }
}
export default Home;
