<?php
class FBPGHelloBlock{
	public function __construct(){
		add_action( 'init', [$this, 'onInit'] );
	}
	function onInit() {
		wp_register_style( 'fbpg-hello-style', FBPG_DIR_URL . 'dist/style.css', [ ], FBPG_VERSION ); // Style
		wp_register_style( 'fbpg-hello-editor-style', FBPG_DIR_URL . 'dist/editor.css', [ 'fbpg-hello-style' ], FBPG_VERSION ); // Backend Style

		register_block_type( __DIR__, [
			'editor_style'		=> 'fbpg-hello-editor-style',
			'render_callback'	=> [$this, 'render']
		] ); // Register Block

		wp_set_script_translations( 'fbpg-hello-editor-script', 'social-media-page-block', FBPG_DIR_PATH . 'languages' );
	}

	function render( $attributes ){
		extract( $attributes );

		wp_enqueue_style( 'fbpg-hello-style' );
		wp_enqueue_script( 'fbpg-hello-script', FBPG_DIR_URL . 'dist/script.js', [ 'react', 'react-dom' ], FBPG_VERSION, true );
		wp_set_script_translations( 'fbpg-hello-script', 'social-media-page-block', FBPG_DIR_PATH . 'languages' );

		$className = $className ?? '';
		$blockClassName = "wp-block-fbpg-hello $className align$align";

		ob_start(); ?>
		<div class='<?php echo esc_attr( $blockClassName ); ?>' id='fbpg-facebook-page-<?php echo esc_attr( $cId ) ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'></div>

		<?php return ob_get_clean();
	}
}
new FBPGHelloBlock();
