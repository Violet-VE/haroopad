define([
		'editor/Codemirror.markdown.keymap'
	],
	function() {
		var keyMaps;

	  if (/Mac/.test(navigator.platform)) {
	    keyMaps = {
	      'Cmd-B': 'markdownBold',
	      'Cmd-I': 'markdownItalic',
	      'Cmd-L': 'markdownLink',
	      'Cmd-Alt-S': 'markdownStrike',
	      'Cmd-Alt-O': 'markdownOrderedList',
	      'Cmd-Alt-U': 'markdownUnOrderedList',
	      'Cmd-Alt-I': 'markdownImage',
	      'Cmd-Alt-B': 'markdownBlockQuote'
	    };

	  } else {
	    keyMaps = {
	      'Ctrl-B': 'markdownBold',
	      'Ctrl-I': 'markdownItalic',
	      'Ctrl-L': 'markdownLink',
	      'Ctrl-Alt-S': 'markdownStrike',
	      'Ctrl-Alt-O': 'markdownOrderedList',
	      'Ctrl-Alt-U': 'markdownUnOrderedList',
	      'Ctrl-Alt-I': 'markdownImage',
	      'Ctrl-Alt-B': 'markdownBlockQuote'
	    };
	  }

	  keyMaps['Enter'] = 'newlineAndIndentContinueMarkdownList';

	  return keyMaps;
})