/** @constructor */
ScalaJS.c.java_lang_Throwable = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.s$1 = null;
  this.e$1 = null;
  this.stackTrace$1 = null
});
ScalaJS.c.java_lang_Throwable.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_lang_Throwable.prototype.constructor = ScalaJS.c.java_lang_Throwable;
ScalaJS.c.java_lang_Throwable.prototype.e__p1__Ljava_lang_Throwable = (function() {
  return this.e$1
});
ScalaJS.c.java_lang_Throwable.prototype.e$und$eq__p1__Ljava_lang_Throwable__V = (function(x$1) {
  this.e$1 = x$1
});
ScalaJS.c.java_lang_Throwable.prototype.initCause__Ljava_lang_Throwable__Ljava_lang_Throwable = (function(cause) {
  this.e$und$eq__p1__Ljava_lang_Throwable__V(cause);
  return this
});
ScalaJS.c.java_lang_Throwable.prototype.getMessage__T = (function() {
  return this.s$1
});
ScalaJS.c.java_lang_Throwable.prototype.getCause__Ljava_lang_Throwable = (function() {
  return this.e__p1__Ljava_lang_Throwable()
});
ScalaJS.c.java_lang_Throwable.prototype.getLocalizedMessage__T = (function() {
  return this.getMessage__T()
});
ScalaJS.c.java_lang_Throwable.prototype.fillInStackTrace__Ljava_lang_Throwable = (function() {
  ScalaJS.modules.scala_scalajs_runtime_StackTrace().captureState__Ljava_lang_Throwable__V(this);
  return this
});
ScalaJS.c.java_lang_Throwable.prototype.getStackTrace__ALjava_lang_StackTraceElement = (function() {
  if ((this.stackTrace$1 === null)) {
    this.stackTrace$1 = ScalaJS.modules.scala_scalajs_runtime_StackTrace().extract__Ljava_lang_Throwable__ALjava_lang_StackTraceElement(this)
  };
  return this.stackTrace$1
});
ScalaJS.c.java_lang_Throwable.prototype.setStackTrace__ALjava_lang_StackTraceElement__V = (function(stackTrace) {
  var i = 0;
  while ((i < stackTrace.underlying.length)) {
    if ((stackTrace.underlying[i] === null)) {
      throw new ScalaJS.c.java_lang_NullPointerException().init___()
    };
    i = (i + 1)
  };
  this.stackTrace$1 = ScalaJS.asArrayOf.java_lang_StackTraceElement(stackTrace.clone__O(), 1)
});
ScalaJS.c.java_lang_Throwable.prototype.printStackTrace__V = (function() {
  this.printStackTrace__Ljava_io_PrintStream__V(ScalaJS.modules.java_lang_System().err__Ljava_io_PrintStream())
});
ScalaJS.c.java_lang_Throwable.prototype.printStackTrace__Ljava_io_PrintStream__V = (function(out) {
  this.getStackTrace__ALjava_lang_StackTraceElement();
  out.println__T__V(this.toString__T());
  if ((this.stackTrace$1.underlying.length !== 0)) {
    var i = 0;
    while ((i < this.stackTrace$1.underlying.length)) {
      out.println__T__V(("  at " + this.stackTrace$1.underlying[i]));
      i = (i + 1)
    }
  } else {
    out.println__T__V("  <no stack trace available>")
  };
  var wCause = this;
  while (((wCause !== wCause.getCause__Ljava_lang_Throwable()) && (wCause.getCause__Ljava_lang_Throwable() !== null))) {
    var parentTrace = wCause.getStackTrace__ALjava_lang_StackTraceElement();
    wCause = wCause.getCause__Ljava_lang_Throwable();
    var thisTrace = wCause.getStackTrace__ALjava_lang_StackTraceElement();
    var thisLength = thisTrace.underlying.length;
    var parentLength = parentTrace.underlying.length;
    out.println__T__V(("Caused by: " + wCause.toString__T()));
    if ((thisLength !== 0)) {
      var sameFrameCount = 0;
      while ((((sameFrameCount < thisLength) && (sameFrameCount < parentLength)) && ScalaJS.anyRefEqEq(thisTrace.underlying[((thisLength - sameFrameCount) - 1)], parentTrace.underlying[((parentLength - sameFrameCount) - 1)]))) {
        sameFrameCount = (sameFrameCount + 1)
      };
      if ((sameFrameCount > 0)) {
        sameFrameCount = (sameFrameCount - 1)
      };
      var lengthToPrint = (thisLength - sameFrameCount);
      var i$2 = 0;
      while ((i$2 < lengthToPrint)) {
        out.println__T__V(("  at " + thisTrace.underlying[i$2]));
        i$2 = (i$2 + 1)
      };
      if ((sameFrameCount > 0)) {
        out.println__T__V((("  ... " + ScalaJS.bI(sameFrameCount)) + " more"))
      }
    } else {
      out.println__T__V("  <no stack trace available>")
    }
  }
});
ScalaJS.c.java_lang_Throwable.prototype.toString__T = (function() {
  var className = ScalaJS.objectGetClass(this).getName__T();
  var message = this.getMessage__T();
  if ((message === null)) {
    return className
  } else {
    return ((("" + className) + ": ") + message)
  }
});
ScalaJS.c.java_lang_Throwable.prototype.init___T__Ljava_lang_Throwable = (function(s, e) {
  this.s$1 = s;
  this.e$1 = e;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.fillInStackTrace__Ljava_lang_Throwable();
  return this
});
ScalaJS.c.java_lang_Throwable.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Throwable.prototype.init___T__Ljava_lang_Throwable.call(this, null, null);
  return this
});
ScalaJS.c.java_lang_Throwable.prototype.init___T = (function(s) {
  ScalaJS.c.java_lang_Throwable.prototype.init___T__Ljava_lang_Throwable.call(this, s, null);
  return this
});
ScalaJS.c.java_lang_Throwable.prototype.init___Ljava_lang_Throwable = (function(e) {
  ScalaJS.c.java_lang_Throwable.prototype.init___T__Ljava_lang_Throwable.call(this, null, e);
  return this
});
ScalaJS.c.java_lang_Throwable.prototype.printStackTrace__Ljava_io_PrintStream__ = (function(out) {
  return ScalaJS.bV(this.printStackTrace__Ljava_io_PrintStream__V(out))
});
ScalaJS.c.java_lang_Throwable.prototype.printStackTrace__ = (function() {
  return ScalaJS.bV(this.printStackTrace__V())
});
ScalaJS.c.java_lang_Throwable.prototype.setStackTrace__ALjava_lang_StackTraceElement__ = (function(stackTrace) {
  return ScalaJS.bV(this.setStackTrace__ALjava_lang_StackTraceElement__V(stackTrace))
});
ScalaJS.c.java_lang_Throwable.prototype.getStackTrace__ = (function() {
  return this.getStackTrace__ALjava_lang_StackTraceElement()
});
ScalaJS.c.java_lang_Throwable.prototype.fillInStackTrace__ = (function() {
  return this.fillInStackTrace__Ljava_lang_Throwable()
});
ScalaJS.c.java_lang_Throwable.prototype.getLocalizedMessage__ = (function() {
  return this.getLocalizedMessage__T()
});
ScalaJS.c.java_lang_Throwable.prototype.getCause__ = (function() {
  return this.getCause__Ljava_lang_Throwable()
});
ScalaJS.c.java_lang_Throwable.prototype.getMessage__ = (function() {
  return this.getMessage__T()
});
ScalaJS.c.java_lang_Throwable.prototype.initCause__Ljava_lang_Throwable__ = (function(cause) {
  return this.initCause__Ljava_lang_Throwable__Ljava_lang_Throwable(cause)
});
/** @constructor */
ScalaJS.inheritable.java_lang_Throwable = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_Throwable.prototype = ScalaJS.c.java_lang_Throwable.prototype;
ScalaJS.is.java_lang_Throwable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_Throwable)))
});
ScalaJS.as.java_lang_Throwable = (function(obj) {
  if ((ScalaJS.is.java_lang_Throwable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.Throwable")
  }
});
ScalaJS.isArrayOf.java_lang_Throwable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_Throwable)))
});
ScalaJS.asArrayOf.java_lang_Throwable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_Throwable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.Throwable;", depth)
  }
});
ScalaJS.data.java_lang_Throwable = new ScalaJS.ClassTypeData({
  java_lang_Throwable: 0
}, false, "java.lang.Throwable", ScalaJS.data.java_lang_Object, {
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_Throwable.prototype.$classData = ScalaJS.data.java_lang_Throwable;
//@ sourceMappingURL=Throwable.js.map
