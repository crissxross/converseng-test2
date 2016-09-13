// NOT USING these - now in appstate & convoturn.model

export interface Convo {
  convo: Array<Convoturn>;
}

export interface Convoturn {
  actor: string;
  says: Array<string[]>;
  thinks?: Array<string[]>;
  options?: Array<string[]>;
}
