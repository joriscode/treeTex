/** @constructor */
ScalaJS.c.scala_io_Source$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.DefaultBufSize$1 = 0
});
ScalaJS.c.scala_io_Source$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_io_Source$.prototype.constructor = ScalaJS.c.scala_io_Source$;
ScalaJS.c.scala_io_Source$.prototype.DefaultBufSize__I = (function() {
  return this.DefaultBufSize$1
});
ScalaJS.c.scala_io_Source$.prototype.stdin__Lscala_io_BufferedSource = (function() {
  return this.fromInputStream__Ljava_io_InputStream__Lscala_io_Codec__Lscala_io_BufferedSource(ScalaJS.modules.java_lang_System().$in__Ljava_io_InputStream(), ScalaJS.modules.scala_io_Codec().fallbackSystemCodec__Lscala_io_Codec())
});
ScalaJS.c.scala_io_Source$.prototype.fromIterable__Lscala_collection_Iterable__Lscala_io_Source = (function(iterable) {
  return new ScalaJS.c.scala_io_Source$$anon$1().init___Lscala_collection_Iterable(iterable).withReset__Lscala_Function0__Lscala_io_Source(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(iterable$1) {
    return (function() {
      return ScalaJS.modules.scala_io_Source().fromIterable__Lscala_collection_Iterable__Lscala_io_Source(iterable$1)
    })
  })(iterable)))
});
ScalaJS.c.scala_io_Source$.prototype.fromChar__C__Lscala_io_Source = (function(c) {
  return this.fromIterable__Lscala_collection_Iterable__Lscala_io_Source(ScalaJS.modules.scala_Predef().wrapCharArray__AC__Lscala_collection_mutable_WrappedArray(ScalaJS.modules.scala_Array().apply__C__Lscala_collection_Seq__AC(c, ScalaJS.modules.scala_Predef().wrapCharArray__AC__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Char.getArrayOf(), [])))))
});
ScalaJS.c.scala_io_Source$.prototype.fromChars__AC__Lscala_io_Source = (function(chars) {
  return this.fromIterable__Lscala_collection_Iterable__Lscala_io_Source(ScalaJS.modules.scala_Predef().wrapCharArray__AC__Lscala_collection_mutable_WrappedArray(chars))
});
ScalaJS.c.scala_io_Source$.prototype.fromString__T__Lscala_io_Source = (function(s) {
  return this.fromIterable__Lscala_collection_Iterable__Lscala_io_Source(ScalaJS.modules.scala_Predef().wrapString__T__Lscala_collection_immutable_WrappedString(s))
});
ScalaJS.c.scala_io_Source$.prototype.fromFile__T__Lscala_io_Codec__Lscala_io_BufferedSource = (function(name, codec) {
  return this.fromFile__Ljava_io_File__Lscala_io_Codec__Lscala_io_BufferedSource(new ScalaJS.c.java_io_File().init___T(name), codec)
});
ScalaJS.c.scala_io_Source$.prototype.fromFile__T__T__Lscala_io_BufferedSource = (function(name, enc) {
  return this.fromFile__T__Lscala_io_Codec__Lscala_io_BufferedSource(name, ScalaJS.modules.scala_io_Codec().apply__T__Lscala_io_Codec(enc))
});
ScalaJS.c.scala_io_Source$.prototype.fromFile__Ljava_net_URI__Lscala_io_Codec__Lscala_io_BufferedSource = (function(uri, codec) {
  return this.fromFile__Ljava_io_File__Lscala_io_Codec__Lscala_io_BufferedSource(new ScalaJS.c.java_io_File().init___Ljava_net_URI(uri), codec)
});
ScalaJS.c.scala_io_Source$.prototype.fromFile__Ljava_net_URI__T__Lscala_io_BufferedSource = (function(uri, enc) {
  return this.fromFile__Ljava_net_URI__Lscala_io_Codec__Lscala_io_BufferedSource(uri, ScalaJS.modules.scala_io_Codec().apply__T__Lscala_io_Codec(enc))
});
ScalaJS.c.scala_io_Source$.prototype.fromFile__Ljava_io_File__Lscala_io_Codec__Lscala_io_BufferedSource = (function(file, codec) {
  return this.fromFile__Ljava_io_File__I__Lscala_io_Codec__Lscala_io_BufferedSource(file, ScalaJS.modules.scala_io_Source().DefaultBufSize__I(), codec)
});
ScalaJS.c.scala_io_Source$.prototype.fromFile__Ljava_io_File__T__Lscala_io_BufferedSource = (function(file, enc) {
  return this.fromFile__Ljava_io_File__Lscala_io_Codec__Lscala_io_BufferedSource(file, ScalaJS.modules.scala_io_Codec().apply__T__Lscala_io_Codec(enc))
});
ScalaJS.c.scala_io_Source$.prototype.fromFile__Ljava_io_File__T__I__Lscala_io_BufferedSource = (function(file, enc, bufferSize) {
  return this.fromFile__Ljava_io_File__I__Lscala_io_Codec__Lscala_io_BufferedSource(file, bufferSize, ScalaJS.modules.scala_io_Codec().apply__T__Lscala_io_Codec(enc))
});
ScalaJS.c.scala_io_Source$.prototype.fromFile__Ljava_io_File__I__Lscala_io_Codec__Lscala_io_BufferedSource = (function(file, bufferSize, codec) {
  var inputStream = new ScalaJS.c.java_io_FileInputStream().init___Ljava_io_File(file);
  return ScalaJS.as.scala_io_BufferedSource(this.createBufferedSource__Ljava_io_InputStream__I__Lscala_Function0__Lscala_Function0__Lscala_io_Codec__Lscala_io_BufferedSource(inputStream, bufferSize, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(file$1, bufferSize$1, codec$2) {
    return (function() {
      return ScalaJS.modules.scala_io_Source().fromFile__Ljava_io_File__I__Lscala_io_Codec__Lscala_io_BufferedSource(file$1, bufferSize$1, codec$2)
    })
  })(file, bufferSize, codec)), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(inputStream$1) {
    return (function() {
      inputStream$1.close__V();
      return ScalaJS.bV(undefined)
    })
  })(inputStream)), codec).withDescription__T__Lscala_io_Source(("file:" + file.getAbsolutePath__T())))
});
ScalaJS.c.scala_io_Source$.prototype.fromBytes__AB__Lscala_io_Codec__Lscala_io_Source = (function(bytes, codec) {
  return this.fromString__T__Lscala_io_Source(ScalaJS.modules.scala_scalajs_runtime_RuntimeString().newString__AB__T__Lscala_scalajs_js_String(bytes, codec.name__T()))
});
ScalaJS.c.scala_io_Source$.prototype.fromBytes__AB__T__Lscala_io_Source = (function(bytes, enc) {
  return this.fromBytes__AB__Lscala_io_Codec__Lscala_io_Source(bytes, ScalaJS.modules.scala_io_Codec().apply__T__Lscala_io_Codec(enc))
});
ScalaJS.c.scala_io_Source$.prototype.fromRawBytes__AB__Lscala_io_Source = (function(bytes) {
  return this.fromString__T__Lscala_io_Source(ScalaJS.modules.scala_scalajs_runtime_RuntimeString().newString__AB__T__Lscala_scalajs_js_String(bytes, ScalaJS.modules.scala_io_Codec().ISO8859__Lscala_io_Codec().name__T()))
});
ScalaJS.c.scala_io_Source$.prototype.fromURI__Ljava_net_URI__Lscala_io_Codec__Lscala_io_BufferedSource = (function(uri, codec) {
  return this.fromFile__Ljava_io_File__Lscala_io_Codec__Lscala_io_BufferedSource(new ScalaJS.c.java_io_File().init___Ljava_net_URI(uri), codec)
});
ScalaJS.c.scala_io_Source$.prototype.fromURL__T__T__Lscala_io_BufferedSource = (function(s, enc) {
  return this.fromURL__T__Lscala_io_Codec__Lscala_io_BufferedSource(s, ScalaJS.modules.scala_io_Codec().apply__T__Lscala_io_Codec(enc))
});
ScalaJS.c.scala_io_Source$.prototype.fromURL__T__Lscala_io_Codec__Lscala_io_BufferedSource = (function(s, codec) {
  return this.fromURL__Ljava_net_URL__Lscala_io_Codec__Lscala_io_BufferedSource(new ScalaJS.c.java_net_URL().init___T(s), codec)
});
ScalaJS.c.scala_io_Source$.prototype.fromURL__Ljava_net_URL__T__Lscala_io_BufferedSource = (function(url, enc) {
  return this.fromURL__Ljava_net_URL__Lscala_io_Codec__Lscala_io_BufferedSource(url, ScalaJS.modules.scala_io_Codec().apply__T__Lscala_io_Codec(enc))
});
ScalaJS.c.scala_io_Source$.prototype.fromURL__Ljava_net_URL__Lscala_io_Codec__Lscala_io_BufferedSource = (function(url, codec) {
  return this.fromInputStream__Ljava_io_InputStream__Lscala_io_Codec__Lscala_io_BufferedSource(url.openStream__Ljava_io_InputStream(), codec)
});
ScalaJS.c.scala_io_Source$.prototype.createBufferedSource__Ljava_io_InputStream__I__Lscala_Function0__Lscala_Function0__Lscala_io_Codec__Lscala_io_BufferedSource = (function(inputStream, bufferSize, reset, close, codec) {
  if (ScalaJS.anyRefEqEq(reset, null)) {
    var resetFn = new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(inputStream$2, bufferSize$2, reset$1, close$1, codec$3) {
      return (function() {
        return ScalaJS.modules.scala_io_Source().createBufferedSource__Ljava_io_InputStream__I__Lscala_Function0__Lscala_Function0__Lscala_io_Codec__Lscala_io_BufferedSource(inputStream$2, bufferSize$2, reset$1, close$1, codec$3)
      })
    })(inputStream, bufferSize, reset, close, codec))
  } else {
    var resetFn = reset
  };
  return ScalaJS.as.scala_io_BufferedSource(new ScalaJS.c.scala_io_BufferedSource().init___Ljava_io_InputStream__I__Lscala_io_Codec(inputStream, bufferSize, codec).withReset__Lscala_Function0__Lscala_io_Source(resetFn).withClose__Lscala_Function0__Lscala_io_Source(close))
});
ScalaJS.c.scala_io_Source$.prototype.createBufferedSource$default$2__I = (function() {
  return this.DefaultBufSize__I()
});
ScalaJS.c.scala_io_Source$.prototype.createBufferedSource$default$3__Lscala_Function0 = (function() {
  return null
});
ScalaJS.c.scala_io_Source$.prototype.createBufferedSource$default$4__Lscala_Function0 = (function() {
  return null
});
ScalaJS.c.scala_io_Source$.prototype.fromInputStream__Ljava_io_InputStream__T__Lscala_io_BufferedSource = (function(is, enc) {
  return this.fromInputStream__Ljava_io_InputStream__Lscala_io_Codec__Lscala_io_BufferedSource(is, ScalaJS.modules.scala_io_Codec().apply__T__Lscala_io_Codec(enc))
});
ScalaJS.c.scala_io_Source$.prototype.fromInputStream__Ljava_io_InputStream__Lscala_io_Codec__Lscala_io_BufferedSource = (function(is, codec) {
  var x$1 = is;
  var x$2 = new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(is$1, codec$1) {
    return (function() {
      return ScalaJS.modules.scala_io_Source().fromInputStream__Ljava_io_InputStream__Lscala_io_Codec__Lscala_io_BufferedSource(is$1, codec$1)
    })
  })(is, codec));
  var x$3 = new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(is$1) {
    return (function() {
      is$1.close__V();
      return ScalaJS.bV(undefined)
    })
  })(is));
  var x$4 = this.createBufferedSource$default$2__I();
  var x$5 = codec;
  return this.createBufferedSource__Ljava_io_InputStream__I__Lscala_Function0__Lscala_Function0__Lscala_io_Codec__Lscala_io_BufferedSource(x$1, x$4, x$2, x$3, x$5)
});
ScalaJS.c.scala_io_Source$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_io_Source = this;
  this.DefaultBufSize$1 = 2048;
  return this
});
ScalaJS.c.scala_io_Source$.prototype.fromInputStream__Ljava_io_InputStream__Lscala_io_Codec__ = (function(is, codec) {
  return this.fromInputStream__Ljava_io_InputStream__Lscala_io_Codec__Lscala_io_BufferedSource(is, codec)
});
ScalaJS.c.scala_io_Source$.prototype.fromInputStream__Ljava_io_InputStream__T__ = (function(is$2, enc) {
  return this.fromInputStream__Ljava_io_InputStream__T__Lscala_io_BufferedSource(is$2, enc)
});
ScalaJS.c.scala_io_Source$.prototype.createBufferedSource__Ljava_io_InputStream__I__Lscala_Function0__Lscala_Function0__Lscala_io_Codec__ = (function(inputStream, bufferSize, reset, close, codec$2) {
  return this.createBufferedSource__Ljava_io_InputStream__I__Lscala_Function0__Lscala_Function0__Lscala_io_Codec__Lscala_io_BufferedSource(inputStream, bufferSize, reset, close, codec$2)
});
ScalaJS.c.scala_io_Source$.prototype.fromURL__Ljava_net_URL__Lscala_io_Codec__ = (function(url, codec$3) {
  return this.fromURL__Ljava_net_URL__Lscala_io_Codec__Lscala_io_BufferedSource(url, codec$3)
});
ScalaJS.c.scala_io_Source$.prototype.fromURL__Ljava_net_URL__T__ = (function(url$2, enc$2) {
  return this.fromURL__Ljava_net_URL__T__Lscala_io_BufferedSource(url$2, enc$2)
});
ScalaJS.c.scala_io_Source$.prototype.fromURL__T__Lscala_io_Codec__ = (function(s, codec$4) {
  return this.fromURL__T__Lscala_io_Codec__Lscala_io_BufferedSource(s, codec$4)
});
ScalaJS.c.scala_io_Source$.prototype.fromURL__T__T__ = (function(s$2, enc$3) {
  return this.fromURL__T__T__Lscala_io_BufferedSource(s$2, enc$3)
});
ScalaJS.c.scala_io_Source$.prototype.fromURI__Ljava_net_URI__Lscala_io_Codec__ = (function(uri, codec$5) {
  return this.fromURI__Ljava_net_URI__Lscala_io_Codec__Lscala_io_BufferedSource(uri, codec$5)
});
ScalaJS.c.scala_io_Source$.prototype.fromRawBytes__AB__ = (function(bytes) {
  return this.fromRawBytes__AB__Lscala_io_Source(bytes)
});
ScalaJS.c.scala_io_Source$.prototype.fromBytes__AB__T__ = (function(bytes$2, enc$4) {
  return this.fromBytes__AB__T__Lscala_io_Source(bytes$2, enc$4)
});
ScalaJS.c.scala_io_Source$.prototype.fromBytes__AB__Lscala_io_Codec__ = (function(bytes$3, codec$6) {
  return this.fromBytes__AB__Lscala_io_Codec__Lscala_io_Source(bytes$3, codec$6)
});
ScalaJS.c.scala_io_Source$.prototype.fromFile__Ljava_io_File__I__Lscala_io_Codec__ = (function(file, bufferSize$2, codec$7) {
  return this.fromFile__Ljava_io_File__I__Lscala_io_Codec__Lscala_io_BufferedSource(file, bufferSize$2, codec$7)
});
ScalaJS.c.scala_io_Source$.prototype.fromFile__Ljava_io_File__T__I__ = (function(file$2, enc$5, bufferSize$3) {
  return this.fromFile__Ljava_io_File__T__I__Lscala_io_BufferedSource(file$2, enc$5, bufferSize$3)
});
ScalaJS.c.scala_io_Source$.prototype.fromFile__Ljava_io_File__T__ = (function(file$3, enc$6) {
  return this.fromFile__Ljava_io_File__T__Lscala_io_BufferedSource(file$3, enc$6)
});
ScalaJS.c.scala_io_Source$.prototype.fromFile__Ljava_io_File__Lscala_io_Codec__ = (function(file$4, codec$8) {
  return this.fromFile__Ljava_io_File__Lscala_io_Codec__Lscala_io_BufferedSource(file$4, codec$8)
});
ScalaJS.c.scala_io_Source$.prototype.fromFile__Ljava_net_URI__T__ = (function(uri$2, enc$7) {
  return this.fromFile__Ljava_net_URI__T__Lscala_io_BufferedSource(uri$2, enc$7)
});
ScalaJS.c.scala_io_Source$.prototype.fromFile__Ljava_net_URI__Lscala_io_Codec__ = (function(uri$3, codec$9) {
  return this.fromFile__Ljava_net_URI__Lscala_io_Codec__Lscala_io_BufferedSource(uri$3, codec$9)
});
ScalaJS.c.scala_io_Source$.prototype.fromFile__T__T__ = (function(name, enc$8) {
  return this.fromFile__T__T__Lscala_io_BufferedSource(name, enc$8)
});
ScalaJS.c.scala_io_Source$.prototype.fromFile__T__Lscala_io_Codec__ = (function(name$2, codec$10) {
  return this.fromFile__T__Lscala_io_Codec__Lscala_io_BufferedSource(name$2, codec$10)
});
ScalaJS.c.scala_io_Source$.prototype.fromString__T__ = (function(s$3) {
  return this.fromString__T__Lscala_io_Source(s$3)
});
ScalaJS.c.scala_io_Source$.prototype.fromChars__AC__ = (function(chars) {
  return this.fromChars__AC__Lscala_io_Source(chars)
});
ScalaJS.c.scala_io_Source$.prototype.fromChar__C__ = (function(c) {
  return this.fromChar__C__Lscala_io_Source(c)
});
ScalaJS.c.scala_io_Source$.prototype.fromIterable__Lscala_collection_Iterable__ = (function(iterable) {
  return this.fromIterable__Lscala_collection_Iterable__Lscala_io_Source(iterable)
});
ScalaJS.c.scala_io_Source$.prototype.stdin__ = (function() {
  return this.stdin__Lscala_io_BufferedSource()
});
ScalaJS.c.scala_io_Source$.prototype.DefaultBufSize__ = (function() {
  return ScalaJS.bI(this.DefaultBufSize__I())
});
/** @constructor */
ScalaJS.inheritable.scala_io_Source$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_Source$.prototype = ScalaJS.c.scala_io_Source$.prototype;
ScalaJS.is.scala_io_Source$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_Source$)))
});
ScalaJS.as.scala_io_Source$ = (function(obj) {
  if ((ScalaJS.is.scala_io_Source$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.Source")
  }
});
ScalaJS.isArrayOf.scala_io_Source$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_Source$)))
});
ScalaJS.asArrayOf.scala_io_Source$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_Source$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.Source;", depth)
  }
});
ScalaJS.data.scala_io_Source$ = new ScalaJS.ClassTypeData({
  scala_io_Source$: 0
}, false, "scala.io.Source$", ScalaJS.data.java_lang_Object, {
  scala_io_Source$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_Source$.prototype.$classData = ScalaJS.data.scala_io_Source$;
ScalaJS.moduleInstances.scala_io_Source = undefined;
ScalaJS.modules.scala_io_Source = (function() {
  if ((!ScalaJS.moduleInstances.scala_io_Source)) {
    ScalaJS.moduleInstances.scala_io_Source = new ScalaJS.c.scala_io_Source$().init___()
  };
  return ScalaJS.moduleInstances.scala_io_Source
});
//@ sourceMappingURL=Source$.js.map
