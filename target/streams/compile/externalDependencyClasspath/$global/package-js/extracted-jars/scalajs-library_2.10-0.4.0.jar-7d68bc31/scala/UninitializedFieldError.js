/** @constructor */
ScalaJS.c.scala_UninitializedFieldError = (function() {
  ScalaJS.c.java_lang_RuntimeException.call(this);
  this.msg$4 = null
});
ScalaJS.c.scala_UninitializedFieldError.prototype = new ScalaJS.inheritable.java_lang_RuntimeException();
ScalaJS.c.scala_UninitializedFieldError.prototype.constructor = ScalaJS.c.scala_UninitializedFieldError;
ScalaJS.c.scala_UninitializedFieldError.prototype.msg__T = (function() {
  return this.msg$4
});
ScalaJS.c.scala_UninitializedFieldError.prototype.copy__T__Lscala_UninitializedFieldError = (function(msg) {
  return new ScalaJS.c.scala_UninitializedFieldError().init___T(msg)
});
ScalaJS.c.scala_UninitializedFieldError.prototype.copy$default$1__T = (function() {
  return this.msg__T()
});
ScalaJS.c.scala_UninitializedFieldError.prototype.productPrefix__T = (function() {
  return "UninitializedFieldError"
});
ScalaJS.c.scala_UninitializedFieldError.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_UninitializedFieldError.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.msg__T();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_UninitializedFieldError.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_UninitializedFieldError.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_UninitializedFieldError(x$1)
});
ScalaJS.c.scala_UninitializedFieldError.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_UninitializedFieldError.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_UninitializedFieldError(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var UninitializedFieldError$1 = ScalaJS.as.scala_UninitializedFieldError(x$1);
      return ScalaJS.anyRefEqEq(this.msg__T(), UninitializedFieldError$1.msg__T())
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_UninitializedFieldError.prototype.init___T = (function(msg) {
  this.msg$4 = msg;
  ScalaJS.c.java_lang_RuntimeException.prototype.init___T.call(this, msg);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_UninitializedFieldError.prototype.init___O = (function(obj) {
  var jsx$3 = ScalaJS.c.scala_UninitializedFieldError.prototype.init___T;
  if ((!ScalaJS.anyRefEqEq(null, obj))) {
    var jsx$2 = ScalaJS.objectToString(obj)
  } else {
    var jsx$2 = "null"
  };
  jsx$3.call(this, jsx$2);
  return this
});
ScalaJS.c.scala_UninitializedFieldError.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_UninitializedFieldError.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_UninitializedFieldError.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_UninitializedFieldError.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_UninitializedFieldError.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_UninitializedFieldError.prototype.copy__T__ = (function(msg) {
  return this.copy__T__Lscala_UninitializedFieldError(msg)
});
ScalaJS.c.scala_UninitializedFieldError.prototype.msg__ = (function() {
  return this.msg__T()
});
/** @constructor */
ScalaJS.inheritable.scala_UninitializedFieldError = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_UninitializedFieldError.prototype = ScalaJS.c.scala_UninitializedFieldError.prototype;
ScalaJS.is.scala_UninitializedFieldError = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_UninitializedFieldError)))
});
ScalaJS.as.scala_UninitializedFieldError = (function(obj) {
  if ((ScalaJS.is.scala_UninitializedFieldError(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.UninitializedFieldError")
  }
});
ScalaJS.isArrayOf.scala_UninitializedFieldError = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_UninitializedFieldError)))
});
ScalaJS.asArrayOf.scala_UninitializedFieldError = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_UninitializedFieldError(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.UninitializedFieldError;", depth)
  }
});
ScalaJS.data.scala_UninitializedFieldError = new ScalaJS.ClassTypeData({
  scala_UninitializedFieldError: 0
}, false, "scala.UninitializedFieldError", ScalaJS.data.java_lang_RuntimeException, {
  scala_UninitializedFieldError: 1,
  scala_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_UninitializedFieldError.prototype.$classData = ScalaJS.data.scala_UninitializedFieldError;
//@ sourceMappingURL=UninitializedFieldError.js.map
