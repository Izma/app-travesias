import { Component, Vue } from 'vue-property-decorator';
import WithRender from './app.html';

@WithRender
@Component({
  name: 'app',
})
export class App extends Vue {
  /**
   * App's constructor
   */
  constructor() {
    super();
  }
}
export default App;
