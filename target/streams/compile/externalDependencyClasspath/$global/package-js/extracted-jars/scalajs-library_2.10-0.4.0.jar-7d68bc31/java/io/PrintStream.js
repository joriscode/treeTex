/** @constructor */
ScalaJS.c.java_io_PrintStream = (function() {
  ScalaJS.c.java_io_FilterOutputStream.call(this);
  this.$$undout$3 = null;
  this.autoFlush$3 = false;
  this.hasError$3 = false
});
ScalaJS.c.java_io_PrintStream.prototype = new ScalaJS.inheritable.java_io_FilterOutputStream();
ScalaJS.c.java_io_PrintStream.prototype.constructor = ScalaJS.c.java_io_PrintStream;
ScalaJS.c.java_io_PrintStream.prototype.write__I__V = (function(b$4) {
  this.$$undout$3.write__I__V(b$4);
  if ((this.autoFlush$3 && (b$4 === 10))) {
    this.flush__V()
  }
});
ScalaJS.c.java_io_PrintStream.prototype.append__C__Ljava_io_PrintStream = (function(c) {
  return this
});
ScalaJS.c.java_io_PrintStream.prototype.append__Ljava_lang_CharSequence__Ljava_io_PrintStream = (function(csq) {
  return this
});
ScalaJS.c.java_io_PrintStream.prototype.append__Ljava_lang_CharSequence__I__I__Ljava_io_PrintStream = (function(csq, start, end) {
  return this
});
ScalaJS.c.java_io_PrintStream.prototype.hasError__Z = (function() {
  return this.hasError$3
});
ScalaJS.c.java_io_PrintStream.prototype.hasError$und$eq__Z__V = (function(x$1) {
  this.hasError$3 = x$1
});
ScalaJS.c.java_io_PrintStream.prototype.checkError__Z = (function() {
  return this.hasError__Z()
});
ScalaJS.c.java_io_PrintStream.prototype.setError__V = (function() {
  this.hasError$und$eq__Z__V(true)
});
ScalaJS.c.java_io_PrintStream.prototype.clearError__V = (function() {
  this.hasError$und$eq__Z__V(false)
});
ScalaJS.c.java_io_PrintStream.prototype.print__Z__V = (function(b) {
  this.print__T__V(ScalaJS.objectToString(ScalaJS.bZ(b)))
});
ScalaJS.c.java_io_PrintStream.prototype.print__C__V = (function(c) {
  this.print__T__V(ScalaJS.objectToString(ScalaJS.bC(c)))
});
ScalaJS.c.java_io_PrintStream.prototype.print__I__V = (function(i) {
  this.print__T__V(ScalaJS.objectToString(ScalaJS.bI(i)))
});
ScalaJS.c.java_io_PrintStream.prototype.print__J__V = (function(l) {
  this.print__T__V(ScalaJS.objectToString(ScalaJS.bJ(l)))
});
ScalaJS.c.java_io_PrintStream.prototype.print__F__V = (function(f) {
  this.print__T__V(ScalaJS.objectToString(ScalaJS.bF(f)))
});
ScalaJS.c.java_io_PrintStream.prototype.print__D__V = (function(d) {
  this.print__T__V(ScalaJS.objectToString(ScalaJS.bD(d)))
});
ScalaJS.c.java_io_PrintStream.prototype.print__AC__V = (function(s) {
  this.print__T__V("character array")
});
ScalaJS.c.java_io_PrintStream.prototype.print__T__V = (function(s) {
  if ((s === null)) {
    this.print__T__V("null")
  } else {
    this.writeString__p3__T__V(s)
  }
});
ScalaJS.c.java_io_PrintStream.prototype.print__O__V = (function(o) {
  if ((o === null)) {
    this.print__T__V("null")
  } else {
    this.print__T__V(ScalaJS.objectToString(o))
  }
});
ScalaJS.c.java_io_PrintStream.prototype.writeString__p3__T__V = (function(s) {
  var bytes = ScalaJS.newArrayObject(ScalaJS.data.scala_Byte.getArrayOf(), [ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(s)]);
  var i = 0;
  while ((i < ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(s))) {
    bytes.underlying[i] = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(s, i);
    i = (i + 1)
  };
  this.write__AB__V(bytes)
});
ScalaJS.c.java_io_PrintStream.prototype.println__V = (function() {
  this.write__I__V(10)
});
ScalaJS.c.java_io_PrintStream.prototype.println__Z__V = (function(x) {
  this.print__Z__V(x);
  this.println__V()
});
ScalaJS.c.java_io_PrintStream.prototype.println__C__V = (function(x) {
  this.print__C__V(x);
  this.println__V()
});
ScalaJS.c.java_io_PrintStream.prototype.println__I__V = (function(x) {
  this.print__I__V(x);
  this.println__V()
});
ScalaJS.c.java_io_PrintStream.prototype.println__J__V = (function(x) {
  this.print__J__V(x);
  this.println__V()
});
ScalaJS.c.java_io_PrintStream.prototype.println__F__V = (function(x) {
  this.print__F__V(x);
  this.println__V()
});
ScalaJS.c.java_io_PrintStream.prototype.println__D__V = (function(x) {
  this.print__D__V(x);
  this.println__V()
});
ScalaJS.c.java_io_PrintStream.prototype.println__T__V = (function(x) {
  this.print__T__V(x);
  this.println__V()
});
ScalaJS.c.java_io_PrintStream.prototype.println__O__V = (function(x) {
  this.print__O__V(x);
  this.println__V()
});
ScalaJS.c.java_io_PrintStream.prototype.printf__T__AO__V = (function(format, args) {
  this.print__T__V("printf")
});
ScalaJS.c.java_io_PrintStream.prototype.printf__Ljava_util_Locale__T__AO__V = (function(l, format, args) {
  this.print__T__V("printf")
});
ScalaJS.c.java_io_PrintStream.prototype.format__T__AO__V = (function(format, args) {
  this.print__T__V("printf")
});
ScalaJS.c.java_io_PrintStream.prototype.format__Ljava_util_Locale__T__AO__V = (function(l, format, args) {
  this.print__T__V("printf")
});
ScalaJS.c.java_io_PrintStream.prototype.append__Ljava_lang_CharSequence__I__I__Ljava_lang_Appendable = (function(csq, start, end) {
  return this.append__Ljava_lang_CharSequence__I__I__Ljava_io_PrintStream(csq, start, end)
});
ScalaJS.c.java_io_PrintStream.prototype.append__Ljava_lang_CharSequence__Ljava_lang_Appendable = (function(csq) {
  return this.append__Ljava_lang_CharSequence__Ljava_io_PrintStream(csq)
});
ScalaJS.c.java_io_PrintStream.prototype.append__C__Ljava_lang_Appendable = (function(c) {
  return this.append__C__Ljava_io_PrintStream(c)
});
ScalaJS.c.java_io_PrintStream.prototype.init___Ljava_io_OutputStream__Z__T = (function(_out, autoFlush, ecoding) {
  this.$$undout$3 = _out;
  this.autoFlush$3 = autoFlush;
  ScalaJS.c.java_io_FilterOutputStream.prototype.init___Ljava_io_OutputStream.call(this, _out);
  this.hasError$3 = false;
  return this
});
ScalaJS.c.java_io_PrintStream.prototype.init___Ljava_io_OutputStream = (function(out) {
  ScalaJS.c.java_io_PrintStream.prototype.init___Ljava_io_OutputStream__Z__T.call(this, out, false, "");
  return this
});
ScalaJS.c.java_io_PrintStream.prototype.init___Ljava_io_OutputStream__Z = (function(out, autoFlush) {
  ScalaJS.c.java_io_PrintStream.prototype.init___Ljava_io_OutputStream__Z__T.call(this, out, autoFlush, "");
  return this
});
ScalaJS.c.java_io_PrintStream.prototype.format__Ljava_util_Locale__T__AO__ = (function(l, format, args) {
  return ScalaJS.bV(this.format__Ljava_util_Locale__T__AO__V(l, format, args))
});
ScalaJS.c.java_io_PrintStream.prototype.format__T__AO__ = (function(format$2, args$2) {
  return ScalaJS.bV(this.format__T__AO__V(format$2, args$2))
});
ScalaJS.c.java_io_PrintStream.prototype.printf__Ljava_util_Locale__T__AO__ = (function(l$2, format$3, args$3) {
  return ScalaJS.bV(this.printf__Ljava_util_Locale__T__AO__V(l$2, format$3, args$3))
});
ScalaJS.c.java_io_PrintStream.prototype.printf__T__AO__ = (function(format$4, args$4) {
  return ScalaJS.bV(this.printf__T__AO__V(format$4, args$4))
});
ScalaJS.c.java_io_PrintStream.prototype.println__O__ = (function(x) {
  return ScalaJS.bV(this.println__O__V(x))
});
ScalaJS.c.java_io_PrintStream.prototype.println__T__ = (function(x$2) {
  return ScalaJS.bV(this.println__T__V(x$2))
});
ScalaJS.c.java_io_PrintStream.prototype.println__D__ = (function(x$3) {
  return ScalaJS.bV(this.println__D__V(x$3))
});
ScalaJS.c.java_io_PrintStream.prototype.println__F__ = (function(x$4) {
  return ScalaJS.bV(this.println__F__V(x$4))
});
ScalaJS.c.java_io_PrintStream.prototype.println__J__ = (function(x$5) {
  return ScalaJS.bV(this.println__J__V(x$5))
});
ScalaJS.c.java_io_PrintStream.prototype.println__I__ = (function(x$6) {
  return ScalaJS.bV(this.println__I__V(x$6))
});
ScalaJS.c.java_io_PrintStream.prototype.println__C__ = (function(x$7) {
  return ScalaJS.bV(this.println__C__V(x$7))
});
ScalaJS.c.java_io_PrintStream.prototype.println__Z__ = (function(x$8) {
  return ScalaJS.bV(this.println__Z__V(x$8))
});
ScalaJS.c.java_io_PrintStream.prototype.println__ = (function() {
  return ScalaJS.bV(this.println__V())
});
ScalaJS.c.java_io_PrintStream.prototype.print__O__ = (function(o) {
  return ScalaJS.bV(this.print__O__V(o))
});
ScalaJS.c.java_io_PrintStream.prototype.print__T__ = (function(s) {
  return ScalaJS.bV(this.print__T__V(s))
});
ScalaJS.c.java_io_PrintStream.prototype.print__AC__ = (function(s$2) {
  return ScalaJS.bV(this.print__AC__V(s$2))
});
ScalaJS.c.java_io_PrintStream.prototype.print__D__ = (function(d) {
  return ScalaJS.bV(this.print__D__V(d))
});
ScalaJS.c.java_io_PrintStream.prototype.print__F__ = (function(f) {
  return ScalaJS.bV(this.print__F__V(f))
});
ScalaJS.c.java_io_PrintStream.prototype.print__J__ = (function(l$3) {
  return ScalaJS.bV(this.print__J__V(l$3))
});
ScalaJS.c.java_io_PrintStream.prototype.print__I__ = (function(i) {
  return ScalaJS.bV(this.print__I__V(i))
});
ScalaJS.c.java_io_PrintStream.prototype.print__C__ = (function(c) {
  return ScalaJS.bV(this.print__C__V(c))
});
ScalaJS.c.java_io_PrintStream.prototype.print__Z__ = (function(b) {
  return ScalaJS.bV(this.print__Z__V(b))
});
ScalaJS.c.java_io_PrintStream.prototype.clearError__ = (function() {
  return ScalaJS.bV(this.clearError__V())
});
ScalaJS.c.java_io_PrintStream.prototype.setError__ = (function() {
  return ScalaJS.bV(this.setError__V())
});
ScalaJS.c.java_io_PrintStream.prototype.checkError__ = (function() {
  return ScalaJS.bZ(this.checkError__Z())
});
ScalaJS.c.java_io_PrintStream.prototype.hasError$und$eq__Z__ = (function(x$1) {
  return ScalaJS.bV(this.hasError$und$eq__Z__V(x$1))
});
ScalaJS.c.java_io_PrintStream.prototype.hasError__ = (function() {
  return ScalaJS.bZ(this.hasError__Z())
});
ScalaJS.c.java_io_PrintStream.prototype.append__Ljava_lang_CharSequence__I__I__ = (function(csq, start, end) {
  return this.append__Ljava_lang_CharSequence__I__I__Ljava_io_PrintStream(csq, start, end)
});
ScalaJS.c.java_io_PrintStream.prototype.append__Ljava_lang_CharSequence__ = (function(csq$2) {
  return this.append__Ljava_lang_CharSequence__Ljava_io_PrintStream(csq$2)
});
ScalaJS.c.java_io_PrintStream.prototype.append__C__ = (function(c$2) {
  return this.append__C__Ljava_io_PrintStream(c$2)
});
/** @constructor */
ScalaJS.inheritable.java_io_PrintStream = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_io_PrintStream.prototype = ScalaJS.c.java_io_PrintStream.prototype;
ScalaJS.is.java_io_PrintStream = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_io_PrintStream)))
});
ScalaJS.as.java_io_PrintStream = (function(obj) {
  if ((ScalaJS.is.java_io_PrintStream(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.io.PrintStream")
  }
});
ScalaJS.isArrayOf.java_io_PrintStream = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_io_PrintStream)))
});
ScalaJS.asArrayOf.java_io_PrintStream = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_io_PrintStream(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.io.PrintStream;", depth)
  }
});
ScalaJS.data.java_io_PrintStream = new ScalaJS.ClassTypeData({
  java_io_PrintStream: 0
}, false, "java.io.PrintStream", ScalaJS.data.java_io_FilterOutputStream, {
  java_io_PrintStream: 1,
  java_lang_Appendable: 1,
  java_io_FilterOutputStream: 1,
  java_io_OutputStream: 1,
  java_io_Flushable: 1,
  java_io_Closeable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_io_PrintStream.prototype.$classData = ScalaJS.data.java_io_PrintStream;
//@ sourceMappingURL=PrintStream.js.map
