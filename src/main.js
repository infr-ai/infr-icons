import path from 'path-browserify'

import ImageIcon from './png/file_image.png'
import VideoIcon from './png/file_video.png'
import WordIcon from './png/file_word.png'
import PowerPointIcon from './png/file_ppt.png'
import ExcelIcon from './png/file_excel.png'
import PdfIcon from './png/file_pdf.png'
import FbxIcon from './png/file_fbx.png'
import SKPIcon from './png/file_skp.png'

import IfcIcon from './png/file_ifc.png'
import LasIcon from './png/file_las.png'
import NwcIcon from './png/file_nwc.png'
import NwdIcon from './png/file_nwd.png'
import RevitIcon from './png/file_revit.png'
import VbimIcon from './png/file_vbim.png'
import DwgIcon from './png/file_dwg.png'
import InsvIcon from './png/file_insv.png'

import JsIcon from './png/file_js.png'
import ZipIcon from './png/file_zip.png'
import JsonIcon from './png/file_json.png'
import TxtIcon from './png/file_text.png'

import FileIcon from './png/file.png'
import FolderIcon from 'vscode-icons/icons/default_folder.svg'

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

  if (has(['.skp'], ext)) {
    return SKPIcon
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
