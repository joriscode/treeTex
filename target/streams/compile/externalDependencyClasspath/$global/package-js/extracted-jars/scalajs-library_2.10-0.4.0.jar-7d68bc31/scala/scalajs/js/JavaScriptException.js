/** @constructor */
ScalaJS.c.scala_scalajs_js_JavaScriptException = (function() {
  ScalaJS.c.java_lang_RuntimeException.call(this);
  this.exception$4 = null
});
ScalaJS.c.scala_scalajs_js_JavaScriptException.prototype = new ScalaJS.inheritable.java_lang_RuntimeException();
ScalaJS.c.scala_scalajs_js_JavaScriptException.prototype.constructor = ScalaJS.c.scala_scalajs_js_JavaScriptException;
ScalaJS.c.scala_scalajs_js_JavaScriptException.prototype.exception__Lscala_scalajs_js_Any = (function() {
  return this.exception$4
});
ScalaJS.c.scala_scalajs_js_JavaScriptException.prototype.toString__T = (function() {
  return ScalaJS.objectToString(this.exception__Lscala_scalajs_js_Any())
});
ScalaJS.c.scala_scalajs_js_JavaScriptException.prototype.fillInStackTrace__Ljava_lang_Throwable = (function() {
  ScalaJS.modules.scala_scalajs_runtime_StackTrace().captureState__Ljava_lang_Throwable__Lscala_scalajs_js_Any__V(this, this.exception__Lscala_scalajs_js_Any());
  return this
});
ScalaJS.c.scala_scalajs_js_JavaScriptException.prototype.copy__Lscala_scalajs_js_Any__Lscala_scalajs_js_JavaScriptException = (function(exception) {
  return new ScalaJS.c.scala_scalajs_js_JavaScriptException().init___Lscala_scalajs_js_Any(exception)
});
ScalaJS.c.scala_scalajs_js_JavaScriptException.prototype.copy$default$1__Lscala_scalajs_js_Any = (function() {
  return this.exception__Lscala_scalajs_js_Any()
});
ScalaJS.c.scala_scalajs_js_JavaScriptException.prototype.productPrefix__T = (function() {
  return "JavaScriptException"
});
ScalaJS.c.scala_scalajs_js_JavaScriptException.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_scalajs_js_JavaScriptException.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.exception__Lscala_scalajs_js_Any();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_scalajs_js_JavaScriptException.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_scalajs_js_JavaScriptException.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_scalajs_js_JavaScriptException(x$1)
});
ScalaJS.c.scala_scalajs_js_JavaScriptException.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_scalajs_js_JavaScriptException.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_scalajs_js_JavaScriptException(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var JavaScriptException$1 = ScalaJS.as.scala_scalajs_js_JavaScriptException(x$1);
      return ((this.exception__Lscala_scalajs_js_Any() === JavaScriptException$1.exception__Lscala_scalajs_js_Any()) && JavaScriptException$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_scalajs_js_JavaScriptException.prototype.init___Lscala_scalajs_js_Any = (function(exception) {
  this.exception$4 = exception;
  ScalaJS.c.java_lang_RuntimeException.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_scalajs_js_JavaScriptException.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_scalajs_js_JavaScriptException.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_scalajs_js_JavaScriptException.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_scalajs_js_JavaScriptException.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_scalajs_js_JavaScriptException.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_scalajs_js_JavaScriptException.prototype.copy__Lscala_scalajs_js_Any__ = (function(exception) {
  return this.copy__Lscala_scalajs_js_Any__Lscala_scalajs_js_JavaScriptException(exception)
});
ScalaJS.c.scala_scalajs_js_JavaScriptException.prototype.exception__ = (function() {
  return this.exception__Lscala_scalajs_js_Any()
});
/** @constructor */
ScalaJS.inheritable.scala_scalajs_js_JavaScriptException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_scalajs_js_JavaScriptException.prototype = ScalaJS.c.scala_scalajs_js_JavaScriptException.prototype;
ScalaJS.is.scala_scalajs_js_JavaScriptException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_js_JavaScriptException)))
});
ScalaJS.as.scala_scalajs_js_JavaScriptException = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_js_JavaScriptException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.js.JavaScriptException")
  }
});
ScalaJS.isArrayOf.scala_scalajs_js_JavaScriptException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_js_JavaScriptException)))
});
ScalaJS.asArrayOf.scala_scalajs_js_JavaScriptException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_js_JavaScriptException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.js.JavaScriptException;", depth)
  }
});
ScalaJS.data.scala_scalajs_js_JavaScriptException = new ScalaJS.ClassTypeData({
  scala_scalajs_js_JavaScriptException: 0
}, false, "scala.scalajs.js.JavaScriptException", ScalaJS.data.java_lang_RuntimeException, {
  scala_scalajs_js_JavaScriptException: 1,
  scala_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_scalajs_js_JavaScriptException.prototype.$classData = ScalaJS.data.scala_scalajs_js_JavaScriptException;
//@ sourceMappingURL=JavaScriptException.js.map
