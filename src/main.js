import path from 'path-browserify'

import ImageIcon from 'vscode-icons/icons/file_type_image.svg'
import VideoIcon from 'vscode-icons/icons/file_type_video.svg'
import WordIcon from 'vscode-icons/icons/file_type_word.svg'
import PowerPointIcon from 'vscode-icons/icons/file_type_powerpoint.svg'
import ExcelIcon from 'vscode-icons/icons/file_type_excel.svg'
import PdfIcon from 'vscode-icons/icons/file_type_pdf2.svg'
import FbxIcon from 'vscode-icons/icons/file_type_fbx.svg'

import IfcIcon from './png/ifc.png'
import LasIcon from './png/las.png'
import NwcIcon from './png/nwc.png'
import NwdIcon from './png/nwd.png'
import RevitIcon from './png/revit.png'
import VbimIcon from './png/vbim.png'

import FileIcon from 'vscode-icons/icons/default_file.svg'
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

  if (has(['.rvt'], ext)) {
    return RevitIcon
  }

  if (has(['.vbim'], ext)) {
    return VbimIcon
  }

  return FileIcon
}

export function folderIcon (fp) {
  return FolderIcon
}
