/** @constructor */
ScalaJS.c.scala_util_Right = (function() {
  ScalaJS.c.scala_util_Either.call(this);
  this.b$2 = null
});
ScalaJS.c.scala_util_Right.prototype = new ScalaJS.inheritable.scala_util_Either();
ScalaJS.c.scala_util_Right.prototype.constructor = ScalaJS.c.scala_util_Right;
ScalaJS.c.scala_util_Right.prototype.b__O = (function() {
  return this.b$2
});
ScalaJS.c.scala_util_Right.prototype.isLeft__Z = (function() {
  return false
});
ScalaJS.c.scala_util_Right.prototype.isRight__Z = (function() {
  return true
});
ScalaJS.c.scala_util_Right.prototype.copy__O__Lscala_util_Right = (function(b) {
  return new ScalaJS.c.scala_util_Right().init___O(b)
});
ScalaJS.c.scala_util_Right.prototype.copy$default$1__O = (function() {
  return this.b__O()
});
ScalaJS.c.scala_util_Right.prototype.productPrefix__T = (function() {
  return "Right"
});
ScalaJS.c.scala_util_Right.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_util_Right.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.b__O();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_util_Right.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_util_Right.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_util_Right(x$1)
});
ScalaJS.c.scala_util_Right.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_util_Right.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_util_Right.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_util_Right(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var Right$1 = ScalaJS.as.scala_util_Right(x$1);
      return ScalaJS.anyEqEq(this.b__O(), Right$1.b__O())
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_util_Right.prototype.init___O = (function(b) {
  this.b$2 = b;
  ScalaJS.c.scala_util_Either.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_util_Right.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_util_Right.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_util_Right.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_util_Right.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_util_Right.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_util_Right.prototype.copy__O__ = (function(b) {
  return this.copy__O__Lscala_util_Right(b)
});
ScalaJS.c.scala_util_Right.prototype.b__ = (function() {
  return this.b__O()
});
/** @constructor */
ScalaJS.inheritable.scala_util_Right = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_Right.prototype = ScalaJS.c.scala_util_Right.prototype;
ScalaJS.is.scala_util_Right = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_Right)))
});
ScalaJS.as.scala_util_Right = (function(obj) {
  if ((ScalaJS.is.scala_util_Right(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.Right")
  }
});
ScalaJS.isArrayOf.scala_util_Right = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_Right)))
});
ScalaJS.asArrayOf.scala_util_Right = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_Right(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.Right;", depth)
  }
});
ScalaJS.data.scala_util_Right = new ScalaJS.ClassTypeData({
  scala_util_Right: 0
}, false, "scala.util.Right", ScalaJS.data.scala_util_Either, {
  scala_util_Right: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_util_Either: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_Right.prototype.$classData = ScalaJS.data.scala_util_Right;
//@ sourceMappingURL=Right.js.map
