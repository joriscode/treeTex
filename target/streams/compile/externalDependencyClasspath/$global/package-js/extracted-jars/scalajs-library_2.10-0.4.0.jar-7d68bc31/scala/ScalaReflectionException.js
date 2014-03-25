/** @constructor */
ScalaJS.c.scala_ScalaReflectionException = (function() {
  ScalaJS.c.java_lang_Exception.call(this);
  this.msg$3 = null
});
ScalaJS.c.scala_ScalaReflectionException.prototype = new ScalaJS.inheritable.java_lang_Exception();
ScalaJS.c.scala_ScalaReflectionException.prototype.constructor = ScalaJS.c.scala_ScalaReflectionException;
ScalaJS.c.scala_ScalaReflectionException.prototype.msg__T = (function() {
  return this.msg$3
});
ScalaJS.c.scala_ScalaReflectionException.prototype.copy__T__Lscala_ScalaReflectionException = (function(msg) {
  return new ScalaJS.c.scala_ScalaReflectionException().init___T(msg)
});
ScalaJS.c.scala_ScalaReflectionException.prototype.copy$default$1__T = (function() {
  return this.msg__T()
});
ScalaJS.c.scala_ScalaReflectionException.prototype.productPrefix__T = (function() {
  return "ScalaReflectionException"
});
ScalaJS.c.scala_ScalaReflectionException.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_ScalaReflectionException.prototype.productElement__I__O = (function(x$1) {
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
ScalaJS.c.scala_ScalaReflectionException.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_ScalaReflectionException.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_ScalaReflectionException(x$1)
});
ScalaJS.c.scala_ScalaReflectionException.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_ScalaReflectionException.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_ScalaReflectionException(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var ScalaReflectionException$1 = ScalaJS.as.scala_ScalaReflectionException(x$1);
      return (ScalaJS.anyRefEqEq(this.msg__T(), ScalaReflectionException$1.msg__T()) && ScalaReflectionException$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_ScalaReflectionException.prototype.init___T = (function(msg) {
  this.msg$3 = msg;
  ScalaJS.c.java_lang_Exception.prototype.init___T.call(this, msg);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_ScalaReflectionException.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_ScalaReflectionException.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_ScalaReflectionException.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_ScalaReflectionException.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_ScalaReflectionException.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_ScalaReflectionException.prototype.copy__T__ = (function(msg) {
  return this.copy__T__Lscala_ScalaReflectionException(msg)
});
ScalaJS.c.scala_ScalaReflectionException.prototype.msg__ = (function() {
  return this.msg__T()
});
/** @constructor */
ScalaJS.inheritable.scala_ScalaReflectionException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_ScalaReflectionException.prototype = ScalaJS.c.scala_ScalaReflectionException.prototype;
ScalaJS.is.scala_ScalaReflectionException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_ScalaReflectionException)))
});
ScalaJS.as.scala_ScalaReflectionException = (function(obj) {
  if ((ScalaJS.is.scala_ScalaReflectionException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.ScalaReflectionException")
  }
});
ScalaJS.isArrayOf.scala_ScalaReflectionException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_ScalaReflectionException)))
});
ScalaJS.asArrayOf.scala_ScalaReflectionException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_ScalaReflectionException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.ScalaReflectionException;", depth)
  }
});
ScalaJS.data.scala_ScalaReflectionException = new ScalaJS.ClassTypeData({
  scala_ScalaReflectionException: 0
}, false, "scala.ScalaReflectionException", ScalaJS.data.java_lang_Exception, {
  scala_ScalaReflectionException: 1,
  scala_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_ScalaReflectionException.prototype.$classData = ScalaJS.data.scala_ScalaReflectionException;
//@ sourceMappingURL=ScalaReflectionException.js.map
