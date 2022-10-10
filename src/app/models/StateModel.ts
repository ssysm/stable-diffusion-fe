export module StateModel {

  export interface RootObject {
    skipped: boolean;
    interrupted: boolean;
    job: string;
    job_no: number;
    job_count: number;
    job_timestamp: string;
    sampling_step: number;
    sampling_steps: number;
    current_image_sampling_step: number;
    model_loading: boolean;
  }

}
