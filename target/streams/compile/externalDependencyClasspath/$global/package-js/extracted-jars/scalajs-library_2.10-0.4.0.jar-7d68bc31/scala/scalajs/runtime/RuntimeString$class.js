ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C = (function($$this, index) {
  return ($$this["charCodeAt"](index) & 65535)
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__codePointAt__Lscala_scalajs_runtime_RuntimeString__I__I = (function($$this, index) {
  return ($$this["charCodeAt"](index) | 0)
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__compareTo__Lscala_scalajs_runtime_RuntimeString__T__I = (function($$this, anotherString) {
  var thatjs = anotherString;
  var thisjs = $$this;
  if ((thisjs === thatjs)) {
    return 0
  } else {
    if ((thisjs < thatjs)) {
      return -1
    } else {
      return 1
    }
  }
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__compareToIgnoreCase__Lscala_scalajs_runtime_RuntimeString__T__I = (function($$this, str) {
  var thatljs = str["toLowerCase"]();
  var thisljs = $$this["toLowerCase"]();
  if ((thisljs === thatljs)) {
    return 0
  } else {
    if ((thisljs < thatljs)) {
      return -1
    } else {
      return 1
    }
  }
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__equalsIgnoreCase__Lscala_scalajs_runtime_RuntimeString__T__Z = (function($$this, that) {
  if ((that === null)) {
    return false
  } else {
    var thatljs = that["toLowerCase"]();
    var thisljs = $$this["toLowerCase"]();
    return (thisljs === thatljs)
  }
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__concat__Lscala_scalajs_runtime_RuntimeString__T__T = (function($$this, s) {
  return ($$this + s)
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__contains__Lscala_scalajs_runtime_RuntimeString__Ljava_lang_CharSequence__Z = (function($$this, s) {
  return (($$this["indexOf"](ScalaJS.objectToString(s)) | 0) !== -1)
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__endsWith__Lscala_scalajs_runtime_RuntimeString__T__Z = (function($$this, suffix) {
  var thisjs = $$this;
  return (suffix === thisjs["substring"]((thisjs["length"] - ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(suffix))))
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__getBytes__Lscala_scalajs_runtime_RuntimeString__AB = (function($$this) {
  return ScalaJS.modules.scala_Predef().$$qmark$qmark$qmark__Lscala_Nothing()
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__getBytes__Lscala_scalajs_runtime_RuntimeString__T__AB = (function($$this, charsetName) {
  return ScalaJS.modules.scala_Predef().$$qmark$qmark$qmark__Lscala_Nothing()
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__getChars__Lscala_scalajs_runtime_RuntimeString__I__I__AC__I__V = (function($$this, srcBegin, srcEnd, dst, dstBegin) {
  var thisjs = $$this;
  if (((((srcBegin < 0) || (srcEnd > thisjs["length"])) || (srcEnd < 0)) || (srcBegin > srcEnd))) {
    throw new ScalaJS.c.java_lang_StringIndexOutOfBoundsException().init___T("Index out of Bound")
  };
  var offset = (dstBegin - srcBegin);
  var i = srcBegin;
  while ((i < srcEnd)) {
    dst.underlying[(i + offset)] = (thisjs["charCodeAt"](i) & 65535);
    i = (i + 1)
  }
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__indexOf__Lscala_scalajs_runtime_RuntimeString__I__I = (function($$this, ch) {
  var search = ScalaJS.g["String"]["fromCharCode"](ch);
  return ($$this["indexOf"](search) | 0)
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__indexOf__Lscala_scalajs_runtime_RuntimeString__I__I__I = (function($$this, ch, fromIndex) {
  var search = ScalaJS.g["String"]["fromCharCode"](ch);
  return ($$this["indexOf"](search, fromIndex) | 0)
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__indexOf__Lscala_scalajs_runtime_RuntimeString__T__I = (function($$this, str) {
  return ($$this["indexOf"](str) | 0)
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__indexOf__Lscala_scalajs_runtime_RuntimeString__T__I__I = (function($$this, str, fromIndex) {
  return ($$this["indexOf"](str, fromIndex) | 0)
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__intern__Lscala_scalajs_runtime_RuntimeString__T = (function($$this) {
  return $$this
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__isEmpty__Lscala_scalajs_runtime_RuntimeString__Z = (function($$this) {
  return (!$$this["length"])
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__lastIndexOf__Lscala_scalajs_runtime_RuntimeString__I__I = (function($$this, ch) {
  var search = ScalaJS.g["String"]["fromCharCode"](ch);
  return ($$this["lastIndexOf"](search) | 0)
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__lastIndexOf__Lscala_scalajs_runtime_RuntimeString__I__I__I = (function($$this, ch, fromIndex) {
  var search = ScalaJS.g["String"]["fromCharCode"](ch);
  return ($$this["lastIndexOf"](search, fromIndex) | 0)
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__lastIndexOf__Lscala_scalajs_runtime_RuntimeString__T__I = (function($$this, str) {
  return ($$this["lastIndexOf"](str) | 0)
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__lastIndexOf__Lscala_scalajs_runtime_RuntimeString__T__I__I = (function($$this, str, fromIndex) {
  return ($$this["lastIndexOf"](str, fromIndex) | 0)
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I = (function($$this) {
  return ($$this["length"] | 0)
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__matches__Lscala_scalajs_runtime_RuntimeString__T__Z = (function($$this, regex) {
  return ScalaJS.modules.java_util_regex_Pattern().matches__T__Ljava_lang_CharSequence__Z(regex, $$this)
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__replace__Lscala_scalajs_runtime_RuntimeString__C__C__T = (function($$this, oldChar, newChar) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__replace__Lscala_scalajs_runtime_RuntimeString__Ljava_lang_CharSequence__Ljava_lang_CharSequence__T($$this, ScalaJS.objectToString(ScalaJS.bC(oldChar)), ScalaJS.objectToString(ScalaJS.bC(newChar)))
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__replace__Lscala_scalajs_runtime_RuntimeString__Ljava_lang_CharSequence__Ljava_lang_CharSequence__T = (function($$this, target, replacement) {
  return $$this["split"](ScalaJS.objectToString(target))["join"](ScalaJS.objectToString(replacement))
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__replaceAll__Lscala_scalajs_runtime_RuntimeString__T__T__T = (function($$this, regex, replacement) {
  var pat = ScalaJS.modules.java_util_regex_Pattern().compile__T__Ljava_util_regex_Pattern(regex);
  var mat = pat.matcher__Ljava_lang_CharSequence__Ljava_util_regex_Matcher($$this);
  return mat.replaceAll__T__T(replacement)
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__replaceFirst__Lscala_scalajs_runtime_RuntimeString__T__T__T = (function($$this, regex, replacement) {
  var pat = ScalaJS.modules.java_util_regex_Pattern().compile__T__Ljava_util_regex_Pattern(regex);
  var mat = pat.matcher__Ljava_lang_CharSequence__Ljava_util_regex_Matcher($$this);
  return mat.replaceFirst__T__T(replacement)
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__split__Lscala_scalajs_runtime_RuntimeString__T__AT = (function($$this, regex) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__split__Lscala_scalajs_runtime_RuntimeString__T__I__AT($$this, regex, 0)
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__split__Lscala_scalajs_runtime_RuntimeString__T__I__AT = (function($$this, regex, limit) {
  var pat = ScalaJS.modules.java_util_regex_Pattern().compile__T__Ljava_util_regex_Pattern(regex);
  return pat.split__Ljava_lang_CharSequence__I__AT($$this, limit)
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__startsWith__Lscala_scalajs_runtime_RuntimeString__T__Z = (function($$this, prefix) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__startsWith__Lscala_scalajs_runtime_RuntimeString__T__I__Z($$this, prefix, 0)
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__startsWith__Lscala_scalajs_runtime_RuntimeString__T__I__Z = (function($$this, prefix, toffset) {
  return (prefix === $$this["substring"](toffset, ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(prefix)))
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__subSequence__Lscala_scalajs_runtime_RuntimeString__I__I__Ljava_lang_CharSequence = (function($$this, beginIndex, endIndex) {
  return $$this["substring"](beginIndex, endIndex)
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__T = (function($$this, beginIndex) {
  return $$this["substring"](beginIndex)
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T = (function($$this, beginIndex, endIndex) {
  return $$this["substring"](beginIndex, endIndex)
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__toCharArray__Lscala_scalajs_runtime_RuntimeString__AC = (function($$this) {
  var length = ($$this["length"] | 0);
  var result = ScalaJS.newArrayObject(ScalaJS.data.scala_Char.getArrayOf(), [length]);
  var i = 0;
  while ((i < length)) {
    result.underlying[i] = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C($$this, i);
    i = (i + 1)
  };
  return result
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__toLowerCase__Lscala_scalajs_runtime_RuntimeString__T = (function($$this) {
  return $$this["toLowerCase"]()
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__toUpperCase__Lscala_scalajs_runtime_RuntimeString__T = (function($$this) {
  return $$this["toUpperCase"]()
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__trim__Lscala_scalajs_runtime_RuntimeString__T = (function($$this) {
  return $$this["trim"]()
});
ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__$init$__Lscala_scalajs_runtime_RuntimeString__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=RuntimeString$class.js.map
