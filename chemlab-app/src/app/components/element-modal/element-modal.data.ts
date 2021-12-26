import { ElementColumns } from "src/app/enums/element-column.enum";
import { IDescription } from "src/app/interfaces/description.interface";

export const descriptions: IDescription[] = [
  { text: ElementColumns.Symbol, icon: 'text_fields' },
  { text: ElementColumns.AtomicNumber, icon: 'filter_6' },
  { text: ElementColumns.AtomicMass, icon: 'filter_6' },
  { text: ElementColumns.State, icon: 'bubble_chart' },
  { text: ElementColumns.ChemicalNature, icon: 'bubble_chart' },
  { text: `${ElementColumns.Density} (in 20°C)`, icon: 'format_color_fill' },  
  { text: `${ElementColumns.MeltingTemp} (°C)`, icon: 'bar_chart' },
  { text: `${ElementColumns.BoilingTemp} (°C)`, icon: 'bar_chart' },
  { text: ElementColumns.DiscoveryYear, icon: 'calendar_today'},
  { text: ElementColumns.Discoverer, icon: 'search' }
]