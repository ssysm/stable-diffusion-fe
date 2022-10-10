export module Txt2ImgRes {

  export interface ExtraGenerationParams {
  }

  export interface RootObject {
    images: string[];
    all_prompts: string[];
    negative_prompt: string;
    seed: number;
    all_seeds: number[];
    subseed: number;
    all_subseeds: number[];
    subseed_strength: number;
    width: number;
    height: number;
    sampler_index: number;
    sampler: string;
    cfg_scale: number;
    steps: number;
    batch_size: number;
    restore_faces: boolean;
    face_restoration_model?: any;
    sd_model_hash: string;
    seed_resize_from_w: number;
    seed_resize_from_h: number;
    denoising_strength?: any;
    extra_generation_params: ExtraGenerationParams;
    index_of_first_image: number;
    html: string;
  }

}

