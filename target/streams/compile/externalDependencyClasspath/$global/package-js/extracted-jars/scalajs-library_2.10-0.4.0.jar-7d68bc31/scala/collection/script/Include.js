/** @constructor */
ScalaJS.c.scala_collection_script_Include = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.location$1 = null;
  this.elem$1 = null
});
ScalaJS.c.scala_collection_script_Include.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_script_Include.prototype.constructor = ScalaJS.c.scala_collection_script_Include;
ScalaJS.c.scala_collection_script_Include.prototype.location__Lscala_collection_script_Location = (function() {
  return this.location$1
});
ScalaJS.c.scala_collection_script_Include.prototype.elem__O = (function() {
  return this.elem$1
});
ScalaJS.c.scala_collection_script_Include.prototype.copy__Lscala_collection_script_Location__O__Lscala_collection_script_Include = (function(location, elem) {
  return new ScalaJS.c.scala_collection_script_Include().init___Lscala_collection_script_Location__O(location, elem)
});
ScalaJS.c.scala_collection_script_Include.prototype.copy$default$1__Lscala_collection_script_Location = (function() {
  return this.location__Lscala_collection_script_Location()
});
ScalaJS.c.scala_collection_script_Include.prototype.copy$default$2__O = (function() {
  return this.elem__O()
});
ScalaJS.c.scala_collection_script_Include.prototype.productPrefix__T = (function() {
  return "Include"
});
ScalaJS.c.scala_collection_script_Include.prototype.productArity__I = (function() {
  return 2
});
ScalaJS.c.scala_collection_script_Include.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.location__Lscala_collection_script_Location();
        break
      };
    case 1:
      {
        return this.elem__O();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_collection_script_Include.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_script_Include.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_collection_script_Include(x$1)
});
ScalaJS.c.scala_collection_script_Include.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_collection_script_Include.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_collection_script_Include.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_collection_script_Include(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var Include$1 = ScalaJS.as.scala_collection_script_Include(x$1);
      return ((ScalaJS.anyRefEqEq(this.location__Lscala_collection_script_Location(), Include$1.location__Lscala_collection_script_Location()) && ScalaJS.anyEqEq(this.elem__O(), Include$1.elem__O())) && Include$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_collection_script_Include.prototype.init___Lscala_collection_script_Location__O = (function(location, elem) {
  this.location$1 = location;
  this.elem$1 = elem;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_collection_script_Include.prototype.init___O = (function(elem) {
  ScalaJS.c.scala_collection_script_Include.prototype.init___Lscala_collection_script_Location__O.call(this, ScalaJS.modules.scala_collection_script_NoLo(), elem);
  return this
});
ScalaJS.c.scala_collection_script_Include.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_collection_script_Include.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_script_Include.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_collection_script_Include.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_script_Include.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_collection_script_Include.prototype.copy__Lscala_collection_script_Location__O__ = (function(location, elem) {
  return this.copy__Lscala_collection_script_Location__O__Lscala_collection_script_Include(location, elem)
});
ScalaJS.c.scala_collection_script_Include.prototype.elem__ = (function() {
  return this.elem__O()
});
ScalaJS.c.scala_collection_script_Include.prototype.location__ = (function() {
  return this.location__Lscala_collection_script_Location()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_script_Include = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_script_Include.prototype = ScalaJS.c.scala_collection_script_Include.prototype;
ScalaJS.is.scala_collection_script_Include = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_script_Include)))
});
ScalaJS.as.scala_collection_script_Include = (function(obj) {
  if ((ScalaJS.is.scala_collection_script_Include(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.script.Include")
  }
});
ScalaJS.isArrayOf.scala_collection_script_Include = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_script_Include)))
});
ScalaJS.asArrayOf.scala_collection_script_Include = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_script_Include(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.script.Include;", depth)
  }
});
ScalaJS.data.scala_collection_script_Include = new ScalaJS.ClassTypeData({
  scala_collection_script_Include: 0
}, false, "scala.collection.script.Include", ScalaJS.data.java_lang_Object, {
  scala_collection_script_Include: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_collection_script_Message: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_script_Include.prototype.$classData = ScalaJS.data.scala_collection_script_Include;
//@ sourceMappingURL=Include.js.map
