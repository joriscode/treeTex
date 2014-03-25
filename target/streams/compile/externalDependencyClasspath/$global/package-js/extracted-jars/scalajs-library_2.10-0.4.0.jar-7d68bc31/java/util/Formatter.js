/** @constructor */
ScalaJS.c.java_util_Formatter = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.java$util$Formatter$$dest$1 = null;
  this.closed$1 = false;
  this.java$util$Formatter$$RegularChunk$1 = null;
  this.java$util$Formatter$$DoublePercent$1 = null;
  this.java$util$Formatter$$EOLChunk$1 = null;
  this.java$util$Formatter$$FormattedChunk$1 = null
});
ScalaJS.c.java_util_Formatter.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_util_Formatter.prototype.constructor = ScalaJS.c.java_util_Formatter;
ScalaJS.c.java_util_Formatter.prototype.java$util$Formatter$$dest__Ljava_lang_Appendable = (function() {
  return this.java$util$Formatter$$dest$1
});
ScalaJS.c.java_util_Formatter.prototype.closed__Z = (function() {
  return this.closed$1
});
ScalaJS.c.java_util_Formatter.prototype.closed$und$eq__Z__V = (function(x$1) {
  this.closed$1 = x$1
});
ScalaJS.c.java_util_Formatter.prototype.close__V = (function() {
  if ((!this.closed__Z())) {
    var x1 = this.java$util$Formatter$$dest__Ljava_lang_Appendable();
    matchEnd4: {
      if (ScalaJS.is.java_io_Closeable(x1)) {
        var x2 = x1;
        ScalaJS.as.java_io_Closeable(x2).close__V();
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd4
      };
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd4
    }
  };
  this.closed$und$eq__Z__V(true)
});
ScalaJS.c.java_util_Formatter.prototype.flush__V = (function() {
  this.ifNotClosed__p1__Lscala_Function0__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
    return (function() {
      var x1 = arg$outer.java$util$Formatter$$dest__Ljava_lang_Appendable();
      matchEnd4: {
        if (ScalaJS.is.java_io_Flushable(x1)) {
          var x2 = x1;
          ScalaJS.as.java_io_Flushable(x2).flush__V();
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd4
        };
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd4
      };
      return ScalaJS.bV(undefined)
    })
  })(this)))
});
ScalaJS.c.java_util_Formatter.prototype.java$util$Formatter$$RegularChunk__Ljava_util_Formatter$RegExpExtractor = (function() {
  return this.java$util$Formatter$$RegularChunk$1
});
ScalaJS.c.java_util_Formatter.prototype.java$util$Formatter$$DoublePercent__Ljava_util_Formatter$RegExpExtractor = (function() {
  return this.java$util$Formatter$$DoublePercent$1
});
ScalaJS.c.java_util_Formatter.prototype.java$util$Formatter$$EOLChunk__Ljava_util_Formatter$RegExpExtractor = (function() {
  return this.java$util$Formatter$$EOLChunk$1
});
ScalaJS.c.java_util_Formatter.prototype.java$util$Formatter$$FormattedChunk__Ljava_util_Formatter$RegExpExtractor = (function() {
  return this.java$util$Formatter$$FormattedChunk$1
});
ScalaJS.c.java_util_Formatter.prototype.format__T__AO__Ljava_util_Formatter = (function(format_in, args) {
  return ScalaJS.as.java_util_Formatter(this.ifNotClosed__p1__Lscala_Function0__O(new ScalaJS.c.java_util_Formatter$$anonfun$format$1().init___Ljava_util_Formatter__T__AO(this, format_in, args)))
});
ScalaJS.c.java_util_Formatter.prototype.ioException__Ljava_io_IOException = (function() {
  return null
});
ScalaJS.c.java_util_Formatter.prototype.locale__Lscala_Null = (function() {
  return ScalaJS.as.scala_runtime_Null$(this.ifNotClosed__p1__Lscala_Function0__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function() {
    return (function() {
      return null
    })
  })())))
});
ScalaJS.c.java_util_Formatter.prototype.out__Ljava_lang_Appendable = (function() {
  return ScalaJS.as.java_lang_Appendable(this.ifNotClosed__p1__Lscala_Function0__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
    return (function() {
      return arg$outer.java$util$Formatter$$dest__Ljava_lang_Appendable()
    })
  })(this))))
});
ScalaJS.c.java_util_Formatter.prototype.toString__T = (function() {
  return ScalaJS.objectToString(this.out__Ljava_lang_Appendable())
});
ScalaJS.c.java_util_Formatter.prototype.ifNotClosed__p1__Lscala_Function0__O = (function(body) {
  if (this.closed__Z()) {
    throw new ScalaJS.c.java_util_FormatterClosedException().init___()
  } else {
    return body.apply__O()
  }
});
ScalaJS.c.java_util_Formatter.prototype.init___Ljava_lang_Appendable = (function(dest) {
  this.java$util$Formatter$$dest$1 = dest;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.closed$1 = false;
  this.java$util$Formatter$$RegularChunk$1 = new ScalaJS.c.java_util_Formatter$RegExpExtractor().init___Ljava_util_Formatter__Lscala_scalajs_js_RegExp(this, new ScalaJS.g["RegExp"]("^[^\\x25]+"));
  this.java$util$Formatter$$DoublePercent$1 = new ScalaJS.c.java_util_Formatter$RegExpExtractor().init___Ljava_util_Formatter__Lscala_scalajs_js_RegExp(this, new ScalaJS.g["RegExp"]("^\\x25{2}"));
  this.java$util$Formatter$$EOLChunk$1 = new ScalaJS.c.java_util_Formatter$RegExpExtractor().init___Ljava_util_Formatter__Lscala_scalajs_js_RegExp(this, new ScalaJS.g["RegExp"]("^\\x25n"));
  this.java$util$Formatter$$FormattedChunk$1 = new ScalaJS.c.java_util_Formatter$RegExpExtractor().init___Ljava_util_Formatter__Lscala_scalajs_js_RegExp(this, new ScalaJS.g["RegExp"]("^\\x25(?:([1-9]\\d*)\\$)?([-#+ 0,\\(<]*)(\\d*)(?:\\.(\\d+))?([A-Za-z])"));
  return this
});
ScalaJS.c.java_util_Formatter.prototype.init___ = (function() {
  ScalaJS.c.java_util_Formatter.prototype.init___Ljava_lang_Appendable.call(this, new ScalaJS.c.java_lang_StringBuilder().init___());
  return this
});
ScalaJS.c.java_util_Formatter.prototype.out__ = (function() {
  return this.out__Ljava_lang_Appendable()
});
ScalaJS.c.java_util_Formatter.prototype.locale__ = (function() {
  return this.locale__Lscala_Null()
});
ScalaJS.c.java_util_Formatter.prototype.ioException__ = (function() {
  return this.ioException__Ljava_io_IOException()
});
ScalaJS.c.java_util_Formatter.prototype.format__T__AO__ = (function(format_in, args) {
  return this.format__T__AO__Ljava_util_Formatter(format_in, args)
});
ScalaJS.c.java_util_Formatter.prototype.java$util$Formatter$$FormattedChunk__ = (function() {
  return this.java$util$Formatter$$FormattedChunk__Ljava_util_Formatter$RegExpExtractor()
});
ScalaJS.c.java_util_Formatter.prototype.java$util$Formatter$$EOLChunk__ = (function() {
  return this.java$util$Formatter$$EOLChunk__Ljava_util_Formatter$RegExpExtractor()
});
ScalaJS.c.java_util_Formatter.prototype.java$util$Formatter$$DoublePercent__ = (function() {
  return this.java$util$Formatter$$DoublePercent__Ljava_util_Formatter$RegExpExtractor()
});
ScalaJS.c.java_util_Formatter.prototype.java$util$Formatter$$RegularChunk__ = (function() {
  return this.java$util$Formatter$$RegularChunk__Ljava_util_Formatter$RegExpExtractor()
});
ScalaJS.c.java_util_Formatter.prototype.flush__ = (function() {
  return ScalaJS.bV(this.flush__V())
});
ScalaJS.c.java_util_Formatter.prototype.close__ = (function() {
  return ScalaJS.bV(this.close__V())
});
ScalaJS.c.java_util_Formatter.prototype.closed$und$eq__Z__ = (function(x$1) {
  return ScalaJS.bV(this.closed$und$eq__Z__V(x$1))
});
ScalaJS.c.java_util_Formatter.prototype.closed__ = (function() {
  return ScalaJS.bZ(this.closed__Z())
});
ScalaJS.c.java_util_Formatter.prototype.java$util$Formatter$$dest__ = (function() {
  return this.java$util$Formatter$$dest__Ljava_lang_Appendable()
});
/** @constructor */
ScalaJS.inheritable.java_util_Formatter = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_Formatter.prototype = ScalaJS.c.java_util_Formatter.prototype;
ScalaJS.is.java_util_Formatter = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_Formatter)))
});
ScalaJS.as.java_util_Formatter = (function(obj) {
  if ((ScalaJS.is.java_util_Formatter(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.Formatter")
  }
});
ScalaJS.isArrayOf.java_util_Formatter = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_Formatter)))
});
ScalaJS.asArrayOf.java_util_Formatter = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_Formatter(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.Formatter;", depth)
  }
});
ScalaJS.data.java_util_Formatter = new ScalaJS.ClassTypeData({
  java_util_Formatter: 0
}, false, "java.util.Formatter", ScalaJS.data.java_lang_Object, {
  java_util_Formatter: 1,
  java_io_Flushable: 1,
  java_io_Closeable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_Formatter.prototype.$classData = ScalaJS.data.java_util_Formatter;
//@ sourceMappingURL=Formatter.js.map
