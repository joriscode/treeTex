/** @constructor */
ScalaJS.c.scala_Some = (function() {
  ScalaJS.c.scala_Option.call(this);
  this.x$2 = null
});
ScalaJS.c.scala_Some.prototype = new ScalaJS.inheritable.scala_Option();
ScalaJS.c.scala_Some.prototype.constructor = ScalaJS.c.scala_Some;
ScalaJS.c.scala_Some.prototype.x__O = (function() {
  return this.x$2
});
ScalaJS.c.scala_Some.prototype.isEmpty__Z = (function() {
  return false
});
ScalaJS.c.scala_Some.prototype.get__O = (function() {
  return this.x__O()
});
ScalaJS.c.scala_Some.prototype.copy__O__Lscala_Some = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x)
});
ScalaJS.c.scala_Some.prototype.copy$default$1__O = (function() {
  return this.x__O()
});
ScalaJS.c.scala_Some.prototype.productPrefix__T = (function() {
  return "Some"
});
ScalaJS.c.scala_Some.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_Some.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.x__O();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_Some.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_Some.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_Some(x$1)
});
ScalaJS.c.scala_Some.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_Some.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_Some.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_Some(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var Some$1 = ScalaJS.as.scala_Some(x$1);
      return ScalaJS.anyEqEq(this.x__O(), Some$1.x__O())
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_Some.prototype.init___O = (function(x) {
  this.x$2 = x;
  ScalaJS.c.scala_Option.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_Some.prototype.copy__O__ = (function(x) {
  return this.copy__O__Lscala_Some(x)
});
ScalaJS.c.scala_Some.prototype.x__ = (function() {
  return this.x__O()
});
/** @constructor */
ScalaJS.inheritable.scala_Some = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Some.prototype = ScalaJS.c.scala_Some.prototype;
ScalaJS.is.scala_Some = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Some)))
});
ScalaJS.as.scala_Some = (function(obj) {
  if ((ScalaJS.is.scala_Some(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Some")
  }
});
ScalaJS.isArrayOf.scala_Some = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Some)))
});
ScalaJS.asArrayOf.scala_Some = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Some(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Some;", depth)
  }
});
ScalaJS.data.scala_Some = new ScalaJS.ClassTypeData({
  scala_Some: 0
}, false, "scala.Some", ScalaJS.data.scala_Option, {
  scala_Some: 1,
  scala_Option: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Some.prototype.$classData = ScalaJS.data.scala_Some;
//@ sourceMappingURL=Some.js.map
