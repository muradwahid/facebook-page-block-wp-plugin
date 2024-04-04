<?php
/**
 * Plugin Name: Social Media Page
 * Description: The Social Media Page plugin allows you to embed your Social Media on your WordPress website..
 * Version: 1.0.0
 * Author: bPlugins LLC
 * Author URI: http://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: social-media-page-block
 */

// ABS PATH
if (!defined('ABSPATH')) {
  exit;
}

// Constant
define('FBPG_VERSION', isset($_SERVER['HTTP_HOST']) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0');
define('FBPG_DIR_URL', plugin_dir_url(__FILE__));
define('FBPG_DIR_PATH', plugin_dir_path(__FILE__));



require_once FBPG_DIR_PATH . 'inc/block.php';