

const replaceRegex = /\b(absolute|abstract|all|and_then|array|as|asm|attribute|begin|bindable|case|class|const|contains|default|div|else|end|except|export|exports|external|far|file|finalization|finally|forward|generic|goto|if|implements|import|in|index|inherited|initialization|interrupt|is|label|library|mod|module|name|near|not|object|of|on|only|operator|or_else|otherwise|override|package|packed|pow|private|program|protected|public|published|interface|implementation|qualified|read|record|resident|requires|resourcestring|restricted|segment|set|shl|shr|specialize|stored|strict|then|threadvar|to|try|type|unit|uses|var|view|virtual|dynamic|overload|reintroduce|with|write|xor|function|procedure|constructor|destructor|break|continue|exit|abort|while|do|for|raise|repeat|until|true|false|nil|ansichar|ansistring|boolean|byte|cardinal|char|comp|currency|double|dword|extended|file|integer|int64|longint|longword|nativeint|nativeuint|olevariant|pansichar|pchar|pwidechar|pointer|real|shortint|shortstring|single|smallint|string|uint64|variant|widechar|widestring|word|wordbool)\b/ig;

function replaceText(text, convertFn) {
	return text.replace(replaceRegex, convertFn);
}

module.exports = {
	replaceText
}

