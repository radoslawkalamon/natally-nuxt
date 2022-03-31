<?php

$script_path = __FILE__;
$script_name = basename($script_path, '.php');
$script_dir = dirname(__FILE__);
$archive_path = $script_dir.'/'.$script_name.'.zip';

try {
  $zip = new ZipArchive();
  $zip->open($archive_path);
  $zip->extractTo('.');
  $zip->close();
} catch (Exception $e) {

} finally {
  unlink($archive_path);
  unlink($script_path);
}
