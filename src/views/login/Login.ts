import { Component, Vue } from 'vue-property-decorator';
import WithRender from './login.html';
import './login.scss';

@WithRender
@Component
export default class Login extends Vue {
  /**
   *
   */
  constructor() {
    super();
  }
}
