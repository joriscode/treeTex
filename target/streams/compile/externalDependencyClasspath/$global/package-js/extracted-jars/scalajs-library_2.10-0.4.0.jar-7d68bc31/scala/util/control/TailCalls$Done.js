/** @constructor */
ScalaJS.c.scala_util_control_TailCalls$Done = (function() {
  ScalaJS.c.scala_util_control_TailCalls$TailRec.call(this);
  this.result$2 = null
});
ScalaJS.c.scala_util_control_TailCalls$Done.prototype = new ScalaJS.inheritable.scala_util_control_TailCalls$TailRec();
ScalaJS.c.scala_util_control_TailCalls$Done.prototype.constructor = ScalaJS.c.scala_util_control_TailCalls$Done;
ScalaJS.c.scala_util_control_TailCalls$Done.prototype.result__O = (function() {
  return this.result$2
});
ScalaJS.c.scala_util_control_TailCalls$Done.prototype.copy__O__Lscala_util_control_TailCalls$Done = (function(result) {
  return new ScalaJS.c.scala_util_control_TailCalls$Done().init___O(result)
});
ScalaJS.c.scala_util_control_TailCalls$Done.prototype.copy$default$1__O = (function() {
  return this.result__O()
});
ScalaJS.c.scala_util_control_TailCalls$Done.prototype.productPrefix__T = (function() {
  return "Done"
});
ScalaJS.c.scala_util_control_TailCalls$Done.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_util_control_TailCalls$Done.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.result__O();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_util_control_TailCalls$Done.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_util_control_TailCalls$Done.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_util_control_TailCalls$Done(x$1)
});
ScalaJS.c.scala_util_control_TailCalls$Done.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_util_control_TailCalls$Done.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_util_control_TailCalls$Done.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_util_control_TailCalls$Done(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var Done$1 = ScalaJS.as.scala_util_control_TailCalls$Done(x$1);
      return (ScalaJS.anyEqEq(this.result__O(), Done$1.result__O()) && Done$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_util_control_TailCalls$Done.prototype.init___O = (function(result) {
  this.result$2 = result;
  ScalaJS.c.scala_util_control_TailCalls$TailRec.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_util_control_TailCalls$Done.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_util_control_TailCalls$Done.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_util_control_TailCalls$Done.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_util_control_TailCalls$Done.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_util_control_TailCalls$Done.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_util_control_TailCalls$Done.prototype.copy__O__ = (function(result) {
  return this.copy__O__Lscala_util_control_TailCalls$Done(result)
});
/** @constructor */
ScalaJS.inheritable.scala_util_control_TailCalls$Done = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_control_TailCalls$Done.prototype = ScalaJS.c.scala_util_control_TailCalls$Done.prototype;
ScalaJS.is.scala_util_control_TailCalls$Done = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_control_TailCalls$Done)))
});
ScalaJS.as.scala_util_control_TailCalls$Done = (function(obj) {
  if ((ScalaJS.is.scala_util_control_TailCalls$Done(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.control.TailCalls$Done")
  }
});
ScalaJS.isArrayOf.scala_util_control_TailCalls$Done = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_control_TailCalls$Done)))
});
ScalaJS.asArrayOf.scala_util_control_TailCalls$Done = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_control_TailCalls$Done(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.control.TailCalls$Done;", depth)
  }
});
ScalaJS.data.scala_util_control_TailCalls$Done = new ScalaJS.ClassTypeData({
  scala_util_control_TailCalls$Done: 0
}, false, "scala.util.control.TailCalls$Done", ScalaJS.data.scala_util_control_TailCalls$TailRec, {
  scala_util_control_TailCalls$Done: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_util_control_TailCalls$TailRec: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_control_TailCalls$Done.prototype.$classData = ScalaJS.data.scala_util_control_TailCalls$Done;
//@ sourceMappingURL=TailCalls$Done.js.map
