export interface Txt2imgreq {
  prompt: string;
  negative_prompt: string;
  prompt_style?: string;
  prompt_style2?: string;
  steps?: number;
  sampler_index?: number;
  restore_faces?: boolean;
  tiling?: boolean;
  n_iter?: number;
  batch_size?: number;
  cfg_scale?: number;
  seed?: number;
  subseed?: number;
  subseed_strength?: number;
  seed_resize_from_h?: number;
  seed_resize_from_w?: number;
  height?: number;
  width?: number;
  enable_hr?: boolean;
  scale_latent?: boolean;
  modelOptions: ModelOptions;
}

export interface ModelOptions {
  checkpoint: string;
  hypernet: string;
}
