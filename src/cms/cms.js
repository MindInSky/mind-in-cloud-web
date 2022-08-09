
import CMS from 'netlify-cms-app';

import { Panels as PanelsView } from 'blocks';
import { Panels as PanelsControl } from 'controls';

CMS.registerWidget('panels', PanelsControl, PanelsView);