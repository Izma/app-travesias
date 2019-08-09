import { Component, Vue } from 'vue-property-decorator';
import WithRender from './login.html';
import './login.scss';

@WithRender
@Component
export default class Login extends Vue {
  public login: any = {};
  /**
   *
   */
  constructor() {
    super();
  }

  public submit() {
    this.$vs.loading();
    setTimeout(() => {
      this.$vs.loading.close();
    }, 2000);
  }
}
