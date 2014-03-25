/** @constructor */
ScalaJS.c.scala_io_BufferedSource = (function() {
  ScalaJS.c.scala_io_Source.call(this);
  this.inputStream$2 = null;
  this.scala$io$BufferedSource$$bufferSize$f = 0;
  this.codec$2 = null;
  this.scala$io$BufferedSource$$charReaderCreated$2 = false;
  this.scala$io$BufferedSource$$charReader$2 = null;
  this.iter$2 = null;
  this.bitmap$0$2 = 0
});
ScalaJS.c.scala_io_BufferedSource.prototype = new ScalaJS.inheritable.scala_io_Source();
ScalaJS.c.scala_io_BufferedSource.prototype.constructor = ScalaJS.c.scala_io_BufferedSource;
ScalaJS.c.scala_io_BufferedSource.prototype.scala$io$BufferedSource$$charReader$lzycompute__p2__Ljava_io_BufferedReader = (function() {
  if (((this.bitmap$0$2 & 1) === 0)) {
    this.scala$io$BufferedSource$$charReaderCreated$und$eq__p2__Z__V(true);
    var jsx$1 = this.bufferedReader__Ljava_io_BufferedReader();
    this.scala$io$BufferedSource$$charReader$2 = jsx$1;
    this.bitmap$0$2 = (this.bitmap$0$2 | 1)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.scala$io$BufferedSource$$charReader$2
});
ScalaJS.c.scala_io_BufferedSource.prototype.iter$lzycompute__p2__Lscala_collection_Iterator = (function() {
  if (((this.bitmap$0$2 & 2) === 0)) {
    this.iter$2 = ScalaJS.modules.scala_collection_Iterator().continually__Lscala_Function0__Lscala_collection_Iterator(new ScalaJS.c.scala_io_BufferedSource$$anonfun$iter$1().init___Lscala_io_BufferedSource(this)).takeWhile__Lscala_Function1__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
      return (function(x$1) {
        x$1 = ScalaJS.uI(x$1);
        return ScalaJS.bZ((x$1 !== -1))
      })
    })())).map__Lscala_Function1__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
      return (function(x$2) {
        x$2 = ScalaJS.uI(x$2);
        return ScalaJS.bC((x$2 & 65535))
      })
    })()));
    this.bitmap$0$2 = (this.bitmap$0$2 | 2)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.iter$2
});
ScalaJS.c.scala_io_BufferedSource.prototype.codec__Lscala_io_Codec = (function() {
  return this.codec$2
});
ScalaJS.c.scala_io_BufferedSource.prototype.reader__Ljava_io_InputStreamReader = (function() {
  return new ScalaJS.c.java_io_InputStreamReader().init___Ljava_io_InputStream__Ljava_nio_charset_CharsetDecoder(this.inputStream$2, this.codec__Lscala_io_Codec().decoder__Ljava_nio_charset_CharsetDecoder())
});
ScalaJS.c.scala_io_BufferedSource.prototype.bufferedReader__Ljava_io_BufferedReader = (function() {
  return new ScalaJS.c.java_io_BufferedReader().init___Ljava_io_Reader__I(this.reader__Ljava_io_InputStreamReader(), this.scala$io$BufferedSource$$bufferSize$f)
});
ScalaJS.c.scala_io_BufferedSource.prototype.scala$io$BufferedSource$$charReaderCreated__Z = (function() {
  return this.scala$io$BufferedSource$$charReaderCreated$2
});
ScalaJS.c.scala_io_BufferedSource.prototype.scala$io$BufferedSource$$charReaderCreated$und$eq__p2__Z__V = (function(x$1) {
  this.scala$io$BufferedSource$$charReaderCreated$2 = x$1
});
ScalaJS.c.scala_io_BufferedSource.prototype.scala$io$BufferedSource$$charReader__Ljava_io_BufferedReader = (function() {
  if (((this.bitmap$0$2 & 1) === 0)) {
    return this.scala$io$BufferedSource$$charReader$lzycompute__p2__Ljava_io_BufferedReader()
  } else {
    return this.scala$io$BufferedSource$$charReader$2
  }
});
ScalaJS.c.scala_io_BufferedSource.prototype.iter__Lscala_collection_Iterator = (function() {
  if (((this.bitmap$0$2 & 2) === 0)) {
    return this.iter$lzycompute__p2__Lscala_collection_Iterator()
  } else {
    return this.iter$2
  }
});
ScalaJS.c.scala_io_BufferedSource.prototype.getLines__Lscala_collection_Iterator = (function() {
  return new ScalaJS.c.scala_io_BufferedSource$BufferedLineIterator().init___Lscala_io_BufferedSource(this)
});
ScalaJS.c.scala_io_BufferedSource.prototype.init___Ljava_io_InputStream__I__Lscala_io_Codec = (function(inputStream, bufferSize, codec) {
  this.inputStream$2 = inputStream;
  this.scala$io$BufferedSource$$bufferSize$f = bufferSize;
  this.codec$2 = codec;
  ScalaJS.c.scala_io_Source.prototype.init___.call(this);
  this.scala$io$BufferedSource$$charReaderCreated$2 = false;
  return this
});
ScalaJS.c.scala_io_BufferedSource.prototype.init___Ljava_io_InputStream__Lscala_io_Codec = (function(inputStream, codec) {
  ScalaJS.c.scala_io_BufferedSource.prototype.init___Ljava_io_InputStream__I__Lscala_io_Codec.call(this, inputStream, ScalaJS.modules.scala_io_Source().DefaultBufSize__I(), codec);
  return this
});
ScalaJS.c.scala_io_BufferedSource.prototype.scala$io$BufferedSource$$charReader__ = (function() {
  return this.scala$io$BufferedSource$$charReader__Ljava_io_BufferedReader()
});
ScalaJS.c.scala_io_BufferedSource.prototype.scala$io$BufferedSource$$charReaderCreated__ = (function() {
  return ScalaJS.bZ(this.scala$io$BufferedSource$$charReaderCreated__Z())
});
ScalaJS.c.scala_io_BufferedSource.prototype.bufferedReader__ = (function() {
  return this.bufferedReader__Ljava_io_BufferedReader()
});
ScalaJS.c.scala_io_BufferedSource.prototype.reader__ = (function() {
  return this.reader__Ljava_io_InputStreamReader()
});
ScalaJS.c.scala_io_BufferedSource.prototype.codec__ = (function() {
  return this.codec__Lscala_io_Codec()
});
/** @constructor */
ScalaJS.inheritable.scala_io_BufferedSource = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_BufferedSource.prototype = ScalaJS.c.scala_io_BufferedSource.prototype;
ScalaJS.is.scala_io_BufferedSource = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_BufferedSource)))
});
ScalaJS.as.scala_io_BufferedSource = (function(obj) {
  if ((ScalaJS.is.scala_io_BufferedSource(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.BufferedSource")
  }
});
ScalaJS.isArrayOf.scala_io_BufferedSource = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_BufferedSource)))
});
ScalaJS.asArrayOf.scala_io_BufferedSource = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_BufferedSource(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.BufferedSource;", depth)
  }
});
ScalaJS.data.scala_io_BufferedSource = new ScalaJS.ClassTypeData({
  scala_io_BufferedSource: 0
}, false, "scala.io.BufferedSource", ScalaJS.data.scala_io_Source, {
  scala_io_BufferedSource: 1,
  scala_io_Source: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_BufferedSource.prototype.$classData = ScalaJS.data.scala_io_BufferedSource;
//@ sourceMappingURL=BufferedSource.js.map
