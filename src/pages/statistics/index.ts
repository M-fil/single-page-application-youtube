import Page from '../../core/templates/page';

class StatisticsPage extends Page {
  static TextObject = {
    MainTitle: 'StatisticsPage',
  };

  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createHeaderTitle(StatisticsPage.TextObject.MainTitle);
    this.container.append(title);
    return this.container;
  }
}

export default StatisticsPage;