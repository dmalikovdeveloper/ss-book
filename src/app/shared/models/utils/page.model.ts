export interface PageModel {
  name: string,
  title: string,
  url: string
  private: boolean
}

export interface PagesModel {[key: string]: PageModel}
