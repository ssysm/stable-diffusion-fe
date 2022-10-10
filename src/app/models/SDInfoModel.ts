export module SDInfoModel {

  export interface Checkpoint {
    filename: string;
    title: string;
    hash: string;
    model_name: string;
    config: string;
  }

  export interface RootObject {
    checkpoints: Checkpoint[];
    hypernets: string[];
  }

}
