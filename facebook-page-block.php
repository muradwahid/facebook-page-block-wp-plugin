<?php
/**
 * Plugin Name: Facebook Page Block
 * Description: The Facebook Page block plugin allows you to embed your Facebook Page on your WordPress website..
 * Version: 1.0.0
 * Author: bPlugins LLC
 * Author URI: http://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: b-blocks
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