import type { IArcMarkSpec, IPathMarkSpec } from '../../typings';
import type { IMarkSpec, IMarkTheme, ISeriesSpec } from '../../typings/spec';
import type { IAnimationSpec } from '../../animation/spec';
import type { VennAppearPreset, VennMark } from './animation';
import type { SeriesMarkNameEnum } from '../interface/type';
import type { ILabelSpec } from '../../component';
export interface IVennSeriesSpec extends ISeriesSpec, IAnimationSpec<VennMark, VennAppearPreset> {
    type: 'venn';
    categoryField?: string;
    valueField: string;
    [SeriesMarkNameEnum.circle]?: IMarkSpec<IArcMarkSpec>;
    [SeriesMarkNameEnum.overlap]?: IMarkSpec<IPathMarkSpec>;
    [SeriesMarkNameEnum.label]?: Omit<ILabelSpec, 'position'>;
    [SeriesMarkNameEnum.overlapLabel]?: Omit<ILabelSpec, 'position'>;
}
export interface IVennSeriesTheme {
    [SeriesMarkNameEnum.circle]?: Partial<IMarkTheme<IArcMarkSpec>>;
    [SeriesMarkNameEnum.overlap]?: Partial<IMarkTheme<IPathMarkSpec>>;
    [SeriesMarkNameEnum.label]?: Omit<ILabelSpec, 'position'>;
    [SeriesMarkNameEnum.overlapLabel]?: Omit<ILabelSpec, 'position'>;
}