import path from 'path-browserify'

import ImageIcon from './png/Image.png'
import VideoIcon from './png/Video.png'
import WordIcon from './png/Word.png'
import PowerPointIcon from './png/PPT.png'
import ExcelIcon from './png/Excel.png'
import PdfIcon from './png/PDF.png'
import FbxIcon from './png/FBX.png'

import IfcIcon from './png/ifc.png'
import LasIcon from './png/las.png'
import NwcIcon from './png/nwc.png'
import NwdIcon from './png/nwd.png'
import RevitIcon from './png/revit.png'
import VbimIcon from './png/vbim.png'
import DwgIcon from './png/dwg.png'
import InsvIcon from './png/insv.png'

import JsIcon from './png/JS.png'
import ZipIcon from './png/Zip.png'
import JsonIcon from './png/Json.png'
import TxtIcon from './png/Text.png'

import FileIcon from './png/File.png'
import FolderIcon from './png/Folder.png'

function has (array, value) {
  return array.indexOf(value) > -1
}

export function fileIcon (fp) {
  const ext = path.extname(fp)?.toLowerCase()

  if (has(['.jpeg', '.jpg', '.gif', '.png', '.bmp', '.tiff', '.ico', '.webp'], ext)) {
    return ImageIcon
  }

  if (has(['.3g2', '.3gp', '.asf', '.amv', '.avi', '.divx', '.qt', '.f4a', '.f4b', '.f4p', '.f4v',
    '.flv', '.m2v', '.m4v', '.mkv', '.mk3d', '.mov', '.mp2', '.mp4', '.mpe', '.mpeg', '.mpeg2',
    '.mpg', '.mpv', '.nsv', '.ogv', '.rm', '.rmvb', '.svi', '.vob', '.webm', '.wmv'], ext)) {
    return VideoIcon
  }

  if (has(['.doc', '.docx', '.docm', '.dot', '.dotx', '.dotm', '.wll'], ext)) {
    return WordIcon
  }

  if (has(['.pot', '.potx', '.potm', '.pps', '.ppsx', '.ppsm', '.ppt', '.pptx', '.pptm', '.pa', '.ppa', '.ppam', '.sldm', '.sldx'], ext)) {
    return PowerPointIcon
  }

  if (has(['.xls', '.xlsx', '.xlsm', '.ods', '.fods', '.xlsb'], ext)) {
    return ExcelIcon
  }

  if (has(['.pdf'], ext)) {
    return PdfIcon
  }

  if (has(['.fbx'], ext)) {
    return FbxIcon
  }

  if (has(['.ifc'], ext)) {
    return IfcIcon
  }

  if (has(['.las'], ext)) {
    return LasIcon
  }

  if (has(['.nwc'], ext)) {
    return NwcIcon
  }

  if (has(['.nwd'], ext)) {
    return NwdIcon
  }

  if (has(['.rvt'], ext)) {
    return RevitIcon
  }

  if (has(['.vbim'], ext)) {
    return VbimIcon
  }

  if (has(['.js'], ext)) {
    return JsIcon
  }

  if (has(['.zip'], ext)) {
    return ZipIcon
  }

  if (has(['.json'], ext)) {
    return JsonIcon
  }

  if (has(['.txt'], ext)) {
    return TxtIcon
  }

  if (has(['.dwg'], ext)) {
    return DwgIcon
  }

  if (has(['.insv'], ext)) {
    return InsvIcon
  }

  return FileIcon
}

export function folderIcon (fp) {
  return FolderIcon
}
