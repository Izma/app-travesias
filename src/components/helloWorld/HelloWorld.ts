import { Component, Vue, Prop } from 'vue-property-decorator';
import WithRender from './hello-world.html';

@WithRender
@Component
export default class HelloWorld extends Vue {
 public active: boolean = false;
  @Prop() private msg!: string;

  /**
   * HelloWorld's constructor
   */
  constructor() {
    super();
  }

}
