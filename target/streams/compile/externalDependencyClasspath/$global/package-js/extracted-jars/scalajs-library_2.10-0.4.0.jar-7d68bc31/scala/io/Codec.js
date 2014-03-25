/** @constructor */
ScalaJS.c.scala_io_Codec = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.charSet$1 = null;
  this.scala$io$Codec$$$undonMalformedInput$f = null;
  this.scala$io$Codec$$$undonUnmappableCharacter$f = null;
  this.scala$io$Codec$$$undencodingReplacement$f = null;
  this.scala$io$Codec$$$unddecodingReplacement$f = null;
  this.$$undonCodingException$1 = null
});
ScalaJS.c.scala_io_Codec.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_io_Codec.prototype.constructor = ScalaJS.c.scala_io_Codec;
ScalaJS.c.scala_io_Codec.prototype.charSet__Ljava_nio_charset_Charset = (function() {
  return this.charSet$1
});
ScalaJS.c.scala_io_Codec.prototype.toString__T = (function() {
  return this.name__T()
});
ScalaJS.c.scala_io_Codec.prototype.onMalformedInput__Ljava_nio_charset_CodingErrorAction__Lscala_io_Codec = (function(newAction) {
  this.scala$io$Codec$$$undonMalformedInput$f = newAction;
  return this
});
ScalaJS.c.scala_io_Codec.prototype.onUnmappableCharacter__Ljava_nio_charset_CodingErrorAction__Lscala_io_Codec = (function(newAction) {
  this.scala$io$Codec$$$undonUnmappableCharacter$f = newAction;
  return this
});
ScalaJS.c.scala_io_Codec.prototype.decodingReplaceWith__T__Lscala_io_Codec = (function(newReplacement) {
  this.scala$io$Codec$$$unddecodingReplacement$f = newReplacement;
  return this
});
ScalaJS.c.scala_io_Codec.prototype.encodingReplaceWith__AB__Lscala_io_Codec = (function(newReplacement) {
  this.scala$io$Codec$$$undencodingReplacement$f = newReplacement;
  return this
});
ScalaJS.c.scala_io_Codec.prototype.onCodingException__Lscala_Function1__Lscala_io_Codec = (function(handler) {
  this.$$undonCodingException$1 = handler;
  return this
});
ScalaJS.c.scala_io_Codec.prototype.name__T = (function() {
  return this.charSet__Ljava_nio_charset_Charset().name__T()
});
ScalaJS.c.scala_io_Codec.prototype.encoder__Ljava_nio_charset_CharsetEncoder = (function() {
  return ScalaJS.as.java_nio_charset_CharsetEncoder(this.applyFunctions__p1__O__Lscala_collection_Seq__O(this.charSet__Ljava_nio_charset_Charset().newEncoder__Ljava_nio_charset_CharsetEncoder(), ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Tuple2.getArrayOf(), [new ScalaJS.c.scala_Tuple2().init___O__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(x$1) {
      return x$1.onMalformedInput__Ljava_nio_charset_CodingErrorAction__Ljava_nio_charset_CharsetEncoder(arg$outer.scala$io$Codec$$$undonMalformedInput$f)
    })
  })(this)), ScalaJS.bZ((!ScalaJS.anyRefEqEq(this.scala$io$Codec$$$undonMalformedInput$f, null)))), new ScalaJS.c.scala_Tuple2().init___O__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(x$2) {
      return x$2.onUnmappableCharacter__Ljava_nio_charset_CodingErrorAction__Ljava_nio_charset_CharsetEncoder(arg$outer.scala$io$Codec$$$undonUnmappableCharacter$f)
    })
  })(this)), ScalaJS.bZ((!ScalaJS.anyRefEqEq(this.scala$io$Codec$$$undonUnmappableCharacter$f, null)))), new ScalaJS.c.scala_Tuple2().init___O__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(x$3) {
      return x$3.replaceWith__AB__Ljava_nio_charset_CharsetEncoder(arg$outer.scala$io$Codec$$$undencodingReplacement$f)
    })
  })(this)), ScalaJS.bZ((this.scala$io$Codec$$$undencodingReplacement$f !== null)))]), 1))))
});
ScalaJS.c.scala_io_Codec.prototype.decoder__Ljava_nio_charset_CharsetDecoder = (function() {
  return ScalaJS.as.java_nio_charset_CharsetDecoder(this.applyFunctions__p1__O__Lscala_collection_Seq__O(this.charSet__Ljava_nio_charset_Charset().newDecoder__Ljava_nio_charset_CharsetDecoder(), ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Tuple2.getArrayOf(), [new ScalaJS.c.scala_Tuple2().init___O__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(x$4) {
      return x$4.onMalformedInput__Ljava_nio_charset_CodingErrorAction__Ljava_nio_charset_CharsetDecoder(arg$outer.scala$io$Codec$$$undonMalformedInput$f)
    })
  })(this)), ScalaJS.bZ((!ScalaJS.anyRefEqEq(this.scala$io$Codec$$$undonMalformedInput$f, null)))), new ScalaJS.c.scala_Tuple2().init___O__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(x$5) {
      return x$5.onUnmappableCharacter__Ljava_nio_charset_CodingErrorAction__Ljava_nio_charset_CharsetDecoder(arg$outer.scala$io$Codec$$$undonUnmappableCharacter$f)
    })
  })(this)), ScalaJS.bZ((!ScalaJS.anyRefEqEq(this.scala$io$Codec$$$undonUnmappableCharacter$f, null)))), new ScalaJS.c.scala_Tuple2().init___O__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(x$6) {
      return x$6.replaceWith__T__Ljava_nio_charset_CharsetDecoder(arg$outer.scala$io$Codec$$$unddecodingReplacement$f)
    })
  })(this)), ScalaJS.bZ((!ScalaJS.anyRefEqEq(this.scala$io$Codec$$$unddecodingReplacement$f, null))))]), 1))))
});
ScalaJS.c.scala_io_Codec.prototype.wrap__Lscala_Function0__I = (function(body) {
  try {
    return body.apply$mcI$sp__I()
  } catch ($jsexc$) {
    if (ScalaJS.is.java_nio_charset_CharacterCodingException($jsexc$)) {
      var e = $jsexc$;
      return ScalaJS.uI(this.$$undonCodingException$1.apply__O__O(e))
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_io_Codec.prototype.applyFunctions__p1__O__Lscala_collection_Seq__O = (function(x, fs) {
  return fs.foldLeft__O__Lscala_Function2__O(x, new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
    return (function(x, pair) {
      var x1 = pair;
      if ((x1 !== null)) {
        var f = ScalaJS.as.scala_Function1(x1.$$und1__O());
        var cond = x1.$$und2$mcZ$sp__Z();
        if (cond) {
          return f.apply__O__O(x)
        } else {
          return x
        }
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    })
  })()))
});
ScalaJS.c.scala_io_Codec.prototype.init___Ljava_nio_charset_Charset = (function(charSet) {
  this.charSet$1 = charSet;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.scala$io$Codec$$$undonMalformedInput$f = null;
  this.scala$io$Codec$$$undonUnmappableCharacter$f = null;
  this.scala$io$Codec$$$undencodingReplacement$f = null;
  this.scala$io$Codec$$$unddecodingReplacement$f = null;
  this.$$undonCodingException$1 = new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(e) {
      throw e
    })
  })());
  return this
});
ScalaJS.c.scala_io_Codec.prototype.wrap__Lscala_Function0__ = (function(body) {
  return ScalaJS.bI(this.wrap__Lscala_Function0__I(body))
});
ScalaJS.c.scala_io_Codec.prototype.decoder__ = (function() {
  return this.decoder__Ljava_nio_charset_CharsetDecoder()
});
ScalaJS.c.scala_io_Codec.prototype.encoder__ = (function() {
  return this.encoder__Ljava_nio_charset_CharsetEncoder()
});
ScalaJS.c.scala_io_Codec.prototype.name__ = (function() {
  return this.name__T()
});
ScalaJS.c.scala_io_Codec.prototype.onCodingException__Lscala_Function1__ = (function(handler) {
  return this.onCodingException__Lscala_Function1__Lscala_io_Codec(handler)
});
ScalaJS.c.scala_io_Codec.prototype.encodingReplaceWith__AB__ = (function(newReplacement) {
  return this.encodingReplaceWith__AB__Lscala_io_Codec(newReplacement)
});
ScalaJS.c.scala_io_Codec.prototype.decodingReplaceWith__T__ = (function(newReplacement$2) {
  return this.decodingReplaceWith__T__Lscala_io_Codec(newReplacement$2)
});
ScalaJS.c.scala_io_Codec.prototype.onUnmappableCharacter__Ljava_nio_charset_CodingErrorAction__ = (function(newAction) {
  return this.onUnmappableCharacter__Ljava_nio_charset_CodingErrorAction__Lscala_io_Codec(newAction)
});
ScalaJS.c.scala_io_Codec.prototype.onMalformedInput__Ljava_nio_charset_CodingErrorAction__ = (function(newAction$2) {
  return this.onMalformedInput__Ljava_nio_charset_CodingErrorAction__Lscala_io_Codec(newAction$2)
});
ScalaJS.c.scala_io_Codec.prototype.charSet__ = (function() {
  return this.charSet__Ljava_nio_charset_Charset()
});
/** @constructor */
ScalaJS.inheritable.scala_io_Codec = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_Codec.prototype = ScalaJS.c.scala_io_Codec.prototype;
ScalaJS.is.scala_io_Codec = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_Codec)))
});
ScalaJS.as.scala_io_Codec = (function(obj) {
  if ((ScalaJS.is.scala_io_Codec(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.Codec")
  }
});
ScalaJS.isArrayOf.scala_io_Codec = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_Codec)))
});
ScalaJS.asArrayOf.scala_io_Codec = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_Codec(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.Codec;", depth)
  }
});
ScalaJS.data.scala_io_Codec = new ScalaJS.ClassTypeData({
  scala_io_Codec: 0
}, false, "scala.io.Codec", ScalaJS.data.java_lang_Object, {
  scala_io_Codec: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_Codec.prototype.$classData = ScalaJS.data.scala_io_Codec;
//@ sourceMappingURL=Codec.js.map
